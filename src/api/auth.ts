import axios from "axios"

export const apiClient = axios.create({
  baseURL: "https://accesscare-backend-production.up.railway.app",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
})
