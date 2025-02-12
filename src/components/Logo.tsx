import clsx from "clsx"
import { ComponentProps } from "react"

function Logo({ className }: ComponentProps<"div">) {
  return (
    <div className={clsx("flex items-center space-x-2", className)}>
      <img src="/image 21 (1).png" className="w-12" />
      <p className="font-bold text-black">CareAccess</p>
    </div>
  )
}

export default Logo
