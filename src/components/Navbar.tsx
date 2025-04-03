import { NavLink, useNavigate } from "react-router"
import Button from "./Button"
import Logo from "./Logo"
import { PATHS } from "../routes/constants"

function Navbar() {
  const Navigate = useNavigate()
  return (
    <nav className="max-w-7xl mx-auto flex justify-between items-center py-4">
      <Logo />
      <div className="flex items-center gap-6">
        <NavLink to={PATHS.HOME}>Home</NavLink>
        <NavLink to={PATHS.SERVICES}>Our Services</NavLink>
        <NavLink to={PATHS.BOOKINGS}>Find Doctors</NavLink>
        <NavLink to={PATHS.DASHBOARD.PATIENT.ROOT}>Track your health</NavLink>
      </div>
      <Button
        className="px-6 rounded-sm py-1"
        onClick={() => Navigate("/login")}
      >
        Register
      </Button>
    </nav>
  )
}

export default Navbar
