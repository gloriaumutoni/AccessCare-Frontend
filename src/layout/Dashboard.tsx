import { Outlet } from "react-router"
import Sidebar from "../components/dashboard/Sidebar"

function DashboardLayout() {
  return (
    <div className="flex gap-6">
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default DashboardLayout
