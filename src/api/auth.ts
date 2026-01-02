import { apiClient } from "./client";

export const authApi = {
    login: async (credentials: any) => {
        return apiClient("/auth/login", {
            method: "POST",
            body: JSON.stringify(credentials),
        });
    },
    register: async (userData: any) => {
        return apiClient("/auth/register", {
            method: "POST",
            body: JSON.stringify(userData),
        });
    },
    logout: () => {
        localStorage.removeItem("token");
        window.location.href = "/auth";
    },
};
