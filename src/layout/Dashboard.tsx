import { Outlet } from "react-router"
import Sidebar from "../components/dashboard/Sidebar"
import { FaHome, FaUser } from "react-icons/fa"
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
    path: PATHS.DASHBOARD.ADMIN.ROOT,
    text: "Users",
    element: <FaUser />,
  },
]

function DashboardLayout() {
  return (
    <div className="flex gap-12">
      <Sidebar links={sidebarLinks} />
      <Outlet />
    </div>
  )
}

export default DashboardLayout
