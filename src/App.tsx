import { RouterProvider } from "react-router"
import "./App.css"
import router from "./routes/router"
import { Toaster } from "react-hot-toast"

export default function App() {
  const apiURL = import.meta.env.VITE_API_URL
  console.log(apiURL)
  return (
    <>
      <RouterProvider router={router} />
      <Toaster position="top-right" />
    </>
  )
}
