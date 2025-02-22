import clsx from "clsx"
import { ComponentProps } from "react"
import { Link } from "react-router"

interface Props extends ComponentProps<"div"> {
  title: string
  participantsNumber: number
}

function DashboardCard({ title, participantsNumber, className }: Props) {
  return (
    <div
      className={clsx(
        "flex flex-col rounded-md w-xs shadow shadow-gray-300",
        className,
      )}
    >
      <h2 className="text-lg">{title}</h2>
      <h3 className="text-xl">{participantsNumber}</h3>
      <Link className="text-md" to="">
        View details
      </Link>
    </div>
  )
}

export default DashboardCard
