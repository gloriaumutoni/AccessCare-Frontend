import { PropsWithChildren } from "react"

function SidebarLink({ children }: PropsWithChildren) {
  return (
    <div className="border rounded-lg hover:shadow-md shadow-gray-600 cursor-pointer p-2 flex justify-between px-4 items-center text-start">
      {children}
    </div>
  )
}

export default SidebarLink
