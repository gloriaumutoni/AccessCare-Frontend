import { Link } from "react-router"
import Logo from "../Logo"
import { FaHome, FaUser } from "react-icons/fa"
import { FaUserDoctor } from "react-icons/fa6"
import { IoLogOutOutline } from "react-icons/io5"
import SidebarLink from "./SidebarLink"

const sidebarLinks = [
  {
    path: "/",
    text: "Home",
    element: <FaHome />,
  },
  {
    path: "/doctors",
    text: "Doctors",
    element: <FaUserDoctor />,
  },
  {
    path: "/users",
    text: "Users",
    element: <FaUser />,
  },
  {
    path: "/logout",
    text: "Logout",
    element: <IoLogOutOutline />,
  },
]

function Sidebar() {
  return (
    <section className="bg-primary-400 max-w-2xs text-white flex flex-col h-screen text-lg space-y-3 px-6 py-3">
      <Logo />
      <hr />
      <div className="flex flex-col space-y-3 pr-5">
        {sidebarLinks.map((links) => (
          <SidebarLink key={links.path}>
            <Link to={links.path}>{links.text}</Link>
            {links.element}
          </SidebarLink>
        ))}
      </div>
    </section>
  )
}

export default Sidebar
