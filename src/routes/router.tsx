import { createBrowserRouter } from "react-router"
import Home from "../Pages/Home"
import Bookings from "../Pages/Bookings"
import Login from "../Pages/Login"
import NotFound from "../Pages/404"

const router = createBrowserRouter([
  { path: "/", element: <Home />, errorElement: <NotFound /> },
  { path: "/bookings", element: <Bookings /> },
  { path: "/login", element: <Login /> },
])

export default router
