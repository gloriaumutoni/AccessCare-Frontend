import ServiceDetails from "../cards/ServiceDetails"
import { services } from "../../data/data"

function AdditionalDetails() {
  return (
    <div className="bg-primary-400 flex gap-8 text-white p-12">
      {services.map((service) => (
        <ServiceDetails
          key={service.id}
          title={service.title}
          description={service.description}
          src={service.src}
          alt={service.alt}
        />
      ))}
    </div>
  )
}

export default AdditionalDetails
