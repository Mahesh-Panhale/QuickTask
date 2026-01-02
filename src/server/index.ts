import "dotenv/config";
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { connectDB } from "../lib/db";
import User from "../models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define Task Schema locally for now since it's not in models folder
const TaskSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    title: { type: String, required: true },
    description: { type: String },
    status: { type: String, enum: ["pending", "completed"], default: "pending" },
}, { timestamps: true });

const Task = mongoose.models.Task || mongoose.model("Task", TaskSchema);

const app = express();
const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET || "quicktask_secret_key";

app.use(cors());
app.use(express.json());

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, "../../dist")));

// Auth Middleware
const auth = (req: any, res: any, next: any) => {
    try {
        const token = req.header("Authorization")?.replace("Bearer ", "");
        if (!token) throw new Error();

        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(401).json({ message: "Please authenticate" });
    }
};

// API Router
const apiRouter = express.Router();
app.use("/api", apiRouter);

apiRouter.post("/auth/register", async (req, res) => {
    try {
        await connectDB();
        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
        });

        const token = jwt.sign({ id: user._id }, JWT_SECRET);
        res.status(201).json({ user: { id: user._id, name: user.name, email: user.email }, token, message: "Account created successfully" });
    } catch (error: any) {
        res.status(500).json({ message: error.message || "Error creating account" });
    }
});

apiRouter.post("/auth/login", async (req, res) => {
    try {
        await connectDB();
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign({ id: user._id }, JWT_SECRET);
        res.json({ user: { id: user._id, name: user.name, email: user.email }, token, message: "Logged in successfully" });
    } catch (error: any) {
        res.status(500).json({ message: error.message || "Error logging in" });
    }
});

apiRouter.get("/tasks", auth, async (req: any, res) => {
    try {
        await connectDB();
        const tasks = await Task.find({ userId: req.user.id }).sort({ createdAt: -1 });
        res.json(tasks.map(t => ({
            id: t._id,
            title: t.title,
            description: t.description,
            status: t.status,
            createdAt: t.createdAt
        })));
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
});

apiRouter.post("/tasks", auth, async (req: any, res) => {
    try {
        await connectDB();
        const task = await Task.create({
            ...req.body,
            userId: req.user.id
        });
        res.status(201).json({
            id: task._id,
            title: task.title,
            description: task.description,
            status: task.status,
            createdAt: task.createdAt
        });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
});

apiRouter.patch("/tasks/:id", auth, async (req: any, res) => {
    try {
        await connectDB();
        const task = await Task.findOneAndUpdate(
            { _id: req.params.id, userId: req.user.id },
            req.body,
            { new: true }
        );
        if (!task) return res.status(404).json({ message: "Task not found" });

        res.json({
            id: task._id,
            title: task.title,
            description: task.description,
            status: task.status,
            createdAt: task.createdAt
        });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
});

apiRouter.delete("/tasks/:id", auth, async (req: any, res) => {
    try {
        await connectDB();
        const task = await Task.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
        if (!task) return res.status(404).json({ message: "Task not found" });
        res.json({ message: "Task deleted" });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
});

// Catch-all route for SPA
app.get(/.*/, (req, res) => {
    res.sendFile(path.join(__dirname, "../../dist/index.html"));
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
