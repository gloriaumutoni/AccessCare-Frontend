import { RouterProvider } from "react-router"
import "./App.css"
import router from "./routes/router"
import { Toaster } from "react-hot-toast"

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster position="top-right" />
    </>
  )
}
