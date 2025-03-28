import { Outlet } from "react-router"
import Sidebar from "../components/dashboard/Sidebar"
import { FaCalendarAlt, FaHome, FaUser } from "react-icons/fa"
import { FaUserDoctor } from "react-icons/fa6"
import { PATHS } from "../routes/constants"

const sidebarLinks = [
  {
    path: PATHS.DASHBOARD.ADMIN.ROOT,
    text: "Home",
    element: <FaHome />,
  },
  {
    path: PATHS.DASHBOARD.ADMIN.DOCTORS,
    text: "Doctors",
    element: <FaUserDoctor />,
  },
  {
    path: PATHS.DASHBOARD.ADMIN.USERS,
    text: "Users",
    element: <FaUser />,
  },
  {
    path: PATHS.DASHBOARD.ADMIN.APPOINTMENTS,
    text: "Appointments",
    element: <FaCalendarAlt />,
  },
]

function AdminDashboardLayout() {
  return (
    <div className="flex gap-8">
      <Sidebar links={sidebarLinks} />
      <Outlet />
    </div>
  )
}

export default AdminDashboardLayout
