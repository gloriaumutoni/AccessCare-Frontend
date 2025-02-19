import { createBrowserRouter } from "react-router"
import Home from "../pages/Home"
import Bookings from "../pages/Bookings"
import NotFound from "../pages/404"
import Layout from "../layout"
import { PATHS } from "./constants"
import LogIn from "../pages/Login"
import SignUp from "../pages/SignUp"

const router = createBrowserRouter([
  {
    path: PATHS.home,
    element: <Layout />,
    children: [
      { index: true, element: <Home />, errorElement: <NotFound /> },
      { path: PATHS.bookings, element: <Bookings /> },
    ],
  },
  { path: PATHS.SignUp, element: <SignUp /> },
  { path: PATHS.logIn, element: <LogIn /> },
])

export default router
