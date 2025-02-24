import { FaCalendarAlt, FaRegCalendarCheck } from "react-icons/fa"
import { MdEditCalendar } from "react-icons/md"
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
  {
    path: PATHS.DASHBOARD.PATIENT.RESCHEDULE,
    text: "Reschedule Appointment",
    element: <MdEditCalendar />,
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
