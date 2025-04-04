import axios, { AxiosError } from "axios"

const axiosInstance = axios.create({
  baseURL: "https://accesscare-backend-production.up.railway.app",
})

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token")

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`
    }

    return config
  },

  (error) => Promise.reject(error),
)

axiosInstance.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token")
    }
    return Promise.reject(error)
  },
)

export default axiosInstance
