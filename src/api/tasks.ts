import { apiClient } from "./client";
import { Task } from "@/types";

export const tasksApi = {
    getAll: async () => {
        return apiClient<Task[]>("/tasks");
    },
    create: async (taskData: Omit<Task, "id" | "createdAt" | "status">) => {
        return apiClient<Task>("/tasks", {
            method: "POST",
            body: JSON.stringify(taskData),
        });
    },
    update: async (id: string, updates: Partial<Task>) => {
        return apiClient<Task>(`/tasks/${id}`, {
            method: "PATCH",
            body: JSON.stringify(updates),
        });
    },
    delete: async (id: string) => {
        return apiClient<{ message: string }>(`/tasks/${id}`, {
            method: "DELETE",
        });
    },
};
