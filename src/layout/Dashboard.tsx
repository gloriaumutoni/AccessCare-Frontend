import { Outlet } from "react-router"
import Sidebar from "../components/dashboard/Sidebar"

function DashboardLayout() {
  return (
    <div className="flex">
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default DashboardLayout
