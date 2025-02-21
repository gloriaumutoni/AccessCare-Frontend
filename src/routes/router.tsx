import { createBrowserRouter } from "react-router"
import Home from "../pages/Home"
import Bookings from "../pages/Bookings"
import NotFound from "../pages/404"
import Layout from "../layout"
import { PATHS } from "./constants"
import LogIn from "../pages/Login"
import SignUp from "../pages/SignUp"
import Dashboard from "../pages/Dashboard"

const router = createBrowserRouter([
  {
    path: PATHS.HOME,
    element: <Layout />,
    children: [
      { index: true, element: <Home />, errorElement: <NotFound /> },
      { path: PATHS.BOOKINGS, element: <Bookings /> },
    ],
  },
  { path: PATHS.SIGNUP, element: <SignUp /> },
  { path: PATHS.LOGIN, element: <LogIn /> },
  { path: PATHS.DASHBOARD.ROOT, element: <Dashboard /> },
])

export default router
