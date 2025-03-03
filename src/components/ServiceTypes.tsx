import clsx from "clsx"

interface ServiceTypesProps {
  id: number
  img: string
  color: string
  description: string
}

type healthDetailsTypes = { healthDetails: ServiceTypesProps[] }

function ServiceTypes({ healthDetails }: healthDetailsTypes) {
  return (
    <div className="flex justify-between">
      {healthDetails.map((details) => (
        <div
          key={details.id}
          className={clsx(
            "space-y-3 font-medium w-3xs p-12 flex flex-col items-center",
            details.color,
          )}
        >
          <img className="flex-grow" src={details.img} alt={details.img} />
          <p>{details.description}</p>
        </div>
      ))}
    </div>
  )
}

export default ServiceTypes
