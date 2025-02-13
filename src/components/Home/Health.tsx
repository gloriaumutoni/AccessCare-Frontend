import { healthDetails } from "../data/data"
import ServiceTypes from "../ServiceTypes"

function Health() {
  return (
    <>
      <section className="relative mt-[12%] mb-18">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold w-xs">
            Your health requirements are our first focus.
          </h2>
          <p className="text-gray-400 w-md mb-12">
            Our team of skilled medical professionals and aids ensure that you
            get the care you need and deserve.
          </p>
        </div>
        <ServiceTypes healthDetails={healthDetails} />
        <img
          className="w-sm absolute top-0 left-[18%]"
          src="/public/Group 1000011082.png"
          alt="health"
        />
      </section>
    </>
  )
}

export default Health
