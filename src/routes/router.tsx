import { createBrowserRouter } from "react-router"
import Home from "../pages/Home"
import Bookings from "../pages/Bookings"
import Login from "../pages/Login"
import NotFound from "../pages/404"
import Layout from "../layout"
import { PATHS } from "./constants"

const router = createBrowserRouter([
  {
    path: PATHS.home,
    element: <Layout />,
    children: [
      { index: true, element: <Home />, errorElement: <NotFound /> },
      { path: PATHS.bookings, element: <Bookings /> },
    ],
  },
  { path: PATHS.login, element: <Login /> },
])

export default router
