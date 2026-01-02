const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "/api";

interface FetchOptions extends RequestInit {
  token?: string;
}

export const apiClient = async <T>(
  endpoint: string,
  { token, ...options }: FetchOptions = {}
): Promise<T> => {
  const headers = new Headers(options.headers);

  // Default headers
  headers.set("Content-Type", "application/json");

  // Add Authorization header if token exists
  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  } else {
    // Try to get token from localStorage if provided (or you can manage this differently)
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
        headers.set("Authorization", `Bearer ${storedToken}`);
    }
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "An error occurred");
  }

  return data;
};
