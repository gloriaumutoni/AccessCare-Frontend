import clsx from "clsx"
import { healthDetails } from "../data/data"

function Health() {
  return (
    <section className="relative mt-[12%] mb-18">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold w-xs">
          Your health requirements are our first focus.
        </h2>
        <p className="text-gray-400 w-md mb-12">
          Our team of skilled medical professionals and aids ensure that you get
          the care you need and deserve.
        </p>
      </div>
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
      <img
        className="w-sm absolute top-0 left-[10%]"
        src="/public/Group 1000011082.png"
        alt="health"
      />
    </section>
  )
}

export default Health
