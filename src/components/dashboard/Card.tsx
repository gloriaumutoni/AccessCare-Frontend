import clsx from "clsx"
import { ComponentProps } from "react"
import { Link } from "react-router"

interface Props extends ComponentProps<"div"> {
  title: string
  participantsNumber: number
  LinkColor: string
}

function DashboardCard({
  title,
  participantsNumber,
  LinkColor,
  className,
}: Props) {
  return (
    <div
      className={clsx(
        "flex flex-col space-y-2 px-4 py-3 rounded-md w-xs shadow shadow-gray-300 ",
        className,
      )}
    >
      <h2 className="text-lg font-medium">{title}</h2>
      <h3 className="text-2xl font-bold">{participantsNumber}</h3>
      <Link className={clsx("text-md font-medium", LinkColor)} to="">
        View details
      </Link>
    </div>
  )
}

export default DashboardCard
