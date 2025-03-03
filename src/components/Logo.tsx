import clsx from "clsx"
import { ComponentProps } from "react"
import { useNavigate } from "react-router"

function Logo({ className }: ComponentProps<"div">) {
  const navigate = useNavigate()
  const NavigateToHomePage = () => navigate("/")
  return (
    <div
      className={clsx("flex items-center space-x-2 cursor-pointer", className)}
      onClick={NavigateToHomePage}
    >
      <img src="/image 21 (1).png" className="w-12" />
      <p className="font-bold text-black">CareAccess</p>
    </div>
  )
}

export default Logo
