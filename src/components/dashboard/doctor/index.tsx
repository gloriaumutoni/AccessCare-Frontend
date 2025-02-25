import { FaCalendarAlt, FaRegCalendarCheck } from "react-icons/fa"
import { MdEditCalendar } from "react-icons/md"
import { Outlet } from "react-router"
import { PATHS } from "../../../routes/constants"
import Sidebar from "../Sidebar"

const sidebarLinks = [
  {
    path: PATHS.DASHBOARD.DOCTOR.ROOT,
    text: "Home",
    element: <FaCalendarAlt />,
  },
  {
    path: PATHS.DASHBOARD.DOCTOR.APPOINTMENTS,
    text: "Appointments",
    element: <FaRegCalendarCheck />,
  },
]

function DoctorDashboardLayout() {
  return (
    <div className="flex gap-12">
      <Sidebar links={sidebarLinks} />
      <Outlet />
    </div>
  )
}
export default DoctorDashboardLayout
