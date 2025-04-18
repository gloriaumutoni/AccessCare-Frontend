import { FaCalendarAlt, FaRegCalendarCheck } from "react-icons/fa"
import { Outlet } from "react-router"
import { PATHS } from "../../../routes/constants"
import Sidebar from "../Sidebar"

const sidebarLinks = [
  {
    path: PATHS.DASHBOARD.PATIENT.ROOT,
    text: "Home",
    element: <FaCalendarAlt />,
  },
  {
    path: PATHS.DASHBOARD.PATIENT.HISTORY,
    text: "History",
    element: <FaRegCalendarCheck />,
  },
]
function PatientDashboardLayout() {
  return (
    <div className="flex gap-12">
      <Sidebar links={sidebarLinks} />
      <Outlet />
    </div>
  )
}

export default PatientDashboardLayout
