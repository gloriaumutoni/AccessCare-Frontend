import { Link, useNavigate } from "react-router"
import Logo from "../Logo"
import { IoLogOutOutline } from "react-icons/io5"
import SidebarLink from "./SidebarLink"
import { PATHS } from "../../routes/constants"
import Button from "../Button"
import { ReactNode } from "react"

interface Props {
  path: string
  text: string
  element: ReactNode
}

interface sidebarLinks {
  links: Props[]
}

function Sidebar({ links }: sidebarLinks) {
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
        {links.map((link) => (
          <SidebarLink key={link.path}>
            <Link to={link.path}>{link.text}</Link>
            {link.element}
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
