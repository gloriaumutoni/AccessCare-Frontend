import { Outlet } from "react-router"
import Sidebar from "../components/dashboard/Sidebar"

function DashboardLayout() {
  return (
    <div className="flex gap-12">
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default DashboardLayout
