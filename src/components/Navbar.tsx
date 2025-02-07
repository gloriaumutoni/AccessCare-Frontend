import { NavLink } from "react-router"
import Button from "./Button"
import Logo from "./Logo"

function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4">
      <Logo />
      <div className="flex items-center gap-6">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/services">Our Services</NavLink>
        <NavLink to="/bookings">Find Doctors</NavLink>
        <NavLink to="/track_health">Track your health</NavLink>
      </div>
      <Button className="px-6 py-1">Register</Button>
    </nav>
  )
}

export default Navbar
