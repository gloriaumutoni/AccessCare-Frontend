import { Outlet } from "react-router"
import Sidebar from "../components/dashbord/Sidebar"

function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default Dashboard
