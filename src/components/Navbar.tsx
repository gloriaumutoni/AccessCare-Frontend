import { NavLink } from "react-router"
import Button from "./Button"
import Logo from "./Logo"
import { PATHS } from "../routes/constants"

function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4">
      <Logo />
      <div className="flex items-center gap-6">
        <NavLink to={PATHS.home}>Home</NavLink>
        <NavLink to={PATHS.services}>Our Services</NavLink>
        <NavLink to={PATHS.bookings}>Find Doctors</NavLink>
        <NavLink to={PATHS.dashboard}>Track your health</NavLink>
      </div>
      <Button className="px-6 rounded-sm py-1">Register</Button>
    </nav>
  )
}

export default Navbar
