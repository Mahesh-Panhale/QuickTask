🚀 QuickTask – Frontend Developer Assignment

QuickTask is a full-stack web application built as part of a Frontend Developer Intern assignment.
The project demonstrates frontend-backend integration, authentication, dashboard CRUD operations, and scalable architecture using modern web technologies.

📌 Project Overview

Frontend: React (Vite) + TypeScript + Tailwind CSS

Backend: Node.js / Python (REST API)

Authentication: JWT-based Register / Login / Logout

State & Data: React Query

UI: Responsive, clean, and user-friendly dashboard

✨ Features
🔐 Authentication

User registration with hashed passwords

Secure login & logout using JWT tokens

Token validation for protected routes

📊 Dashboard

CRUD operations on entities

Protected dashboard access

Real-time UI updates

🎨 UI/UX

Fully responsive design

Clean and modern interface

User-friendly navigation

🛠️ Tech Stack
Frontend

React (Vite)

TypeScript

Tailwind CSS

React Router

React Query

Backend

REST API (Node.js / Python)

JWT Authentication

Password hashing

Secure API routes

📂 Project Structure
QuickTask/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── hooks/
│   │   └── App.tsx
│
├── backend/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   └── server.js
│
├── README.md
└── package.json

🚀 Getting Started
1️⃣ Clone the repository
git clone https://github.com/Mahesh-Panhale/QuickTask.git
cd QuickTask

2️⃣ Install dependencies
npm install

3️⃣ Run frontend
npm run dev

4️⃣ Run backend
npm run server

🔑 API Documentation

Basic API endpoints include:

Method	Endpoint	Description
POST	/api/auth/register	Register user
POST	/api/auth/login	Login user
GET	/api/dashboard	Fetch dashboard data
POST	/api/entity	Create entity
PUT	/api/entity/:id	Update entity
DELETE	/api/entity/:id	Delete entity

Postman collection / API details can be found in the repository.

🔒 Security Practices

Passwords hashed before storage

JWT token validation on protected routes

Secure API access with middleware

🤖 Use of AI Tools

AI-assisted tools were used during development to:

Improve code quality

Follow best practices

Speed up development

All logic, architecture decisions, and final implementations were fully reviewed, understood, and customized by me to ensure correctness, security, and maintainability.

📈 Scalability Notes

For production-level scaling:

Separate frontend & backend deployments

Use environment variables for configs

Introduce role-based access control

Add caching (Redis)

Move to microservices if needed

👤 Author

Mahesh Panhale
Frontend Developer
🔗 GitHub: https://github.com/Mahesh-Panhale

🔗 Portfolio: https://mahifreelancehub.in
