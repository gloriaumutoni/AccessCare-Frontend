import { createBrowserRouter } from "react-router"
import Home from "../pages/Home"
import Bookings from "../pages/Bookings"
import NotFound from "../pages/404"
import Layout from "../layout"
import { PATHS } from "./constants"
import LogIn from "../pages/Login"
import SignUp from "../pages/SignUp"
import DashboardContent from "../components/dashboard"
import AdminDashboard from "../pages/AdminDashboard"
import ProtectedRoutes from "./protected"
import DoctorsContent from "../components/dashboard/DoctorsContent"
import PatientDashboardLayout from "../components/dashboard/patient"
import PatientContent from "../components/dashboard/patient/PatientContent"
import DoctorDashboardLayout from "../components/dashboard/doctor"
import UsersContent from "../components/dashboard/UsersContent"
import AppointmentContent from "../components/dashboard/AppointmentContent"
import DoctorsActionContent from "../components/dashboard/DoctorsActionContent"
import AppointmentHistory from "../components/dashboard/patient/AppointmentHistory"

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
  {
    element: <ProtectedRoutes />,
    children: [
      {
        path: PATHS.DASHBOARD.ADMIN.ROOT,
        element: <AdminDashboard />,
        children: [
          { index: true, element: <DashboardContent /> },
          {
            path: PATHS.DASHBOARD.ADMIN.DOCTORS,
            element: <DoctorsContent />,
          },
          {
            path: PATHS.DASHBOARD.ADMIN.USERS,
            element: <UsersContent />,
          },
          {
            path: PATHS.DASHBOARD.ADMIN.APPOINTMENTS,
            element: <AppointmentContent />,
          },
        ],
      },
    ],
  },
  {
    element: <ProtectedRoutes />,
    children: [
      {
        path: PATHS.DASHBOARD.PATIENT.ROOT,
        element: <PatientDashboardLayout />,
        children: [
          { index: true, element: <PatientContent /> },
          {
            path: PATHS.DASHBOARD.PATIENT.HISTORY,
            element: <AppointmentHistory />,
          },
        ],
      },
    ],
  },
  {
    element: <ProtectedRoutes />,
    children: [
      {
        path: PATHS.DASHBOARD.DOCTOR.ROOT,
        element: <DoctorDashboardLayout />,
        children: [
          { index: true, element: <DoctorsActionContent /> },
          {
            path: PATHS.DASHBOARD.DOCTOR.APPOINTMENTS,
            element: <DoctorsContent />,
          },
        ],
      },
    ],
  },
])

export default router
