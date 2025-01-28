import { NavLink } from "react-router"
import Button from "./Button"

function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 ">
      <div className="flex items-center space-x-2">
        <img src="/image 21 (1).png" className="w-12" />
        <p className="font-bold">CareAccess</p>
      </div>
      <div className="flex items-center space-x-4 ">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/services">Our Services</NavLink>
        <NavLink to="/jobs">Find Jobs</NavLink>
        <NavLink to="/track_health">Track your health</NavLink>
      </div>
      <div className="space-x-4">
        <Button className="px-6 py-1 rounded-sm">Register</Button>
      </div>
    </nav>
  )
}

export default Navbar
