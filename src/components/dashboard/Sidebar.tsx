import { Link, useNavigate } from "react-router"
import Logo from "../Logo"
import { FaHome, FaUser } from "react-icons/fa"
import { FaUserDoctor } from "react-icons/fa6"
import { IoLogOutOutline } from "react-icons/io5"
import SidebarLink from "./SidebarLink"
import { PATHS } from "../../routes/constants"
import Button from "../Button"

const sidebarLinks = [
  {
    path: PATHS.DASHBOARD.ROOT,
    text: "Home",
    element: <FaHome />,
  },
  {
    path: PATHS.DASHBOARD.DOCTORS,
    text: "Doctors",
    element: <FaUserDoctor />,
  },
  {
    path: PATHS.DASHBOARD.ROOT,
    text: "Users",
    element: <FaUser />,
  },
]

function Sidebar() {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem("token")
    navigate(PATHS.HOME)
  }
  return (
    <section className="bg-primary-400 text-white flex flex-col w-3xs h-screen text-lg space-y-3 px-8 py-3">
      <Logo />
      <hr />
      <div className="flex flex-col space-y-3">
        {sidebarLinks.map((links) => (
          <SidebarLink key={links.path}>
            <Link to={links.path}>{links.text}</Link>
            {links.element}
          </SidebarLink>
        ))}
        <Button
          onClick={handleLogout}
          className="border rounded-lg hover:shadow-md shadow-gray-600 cursor-pointer p-2 flex justify-between px-4 items-center text-start"
        >
          <span>Logout</span>
          <IoLogOutOutline />
        </Button>
      </div>
    </section>
  )
}

export default Sidebar
