import { createBrowserRouter } from "react-router"
import Home from "../Pages/Home"
import Bookings from "../Pages/Bookings"
import Login from "../Pages/Login"

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/bookings", element: <Bookings /> },
  { path: "/login", element: <Login /> },
])

export default router
