import { ComponentProps } from "react"

interface ServiceDetailsProps extends ComponentProps<"img"> {
  title: string
  description: string
}

function ServiceDetails({ title, description, src, alt }: ServiceDetailsProps) {
  return (
    <div className="flex gap-3">
      <img src={src} alt={alt} className="bg-white px-3 py-6 rounded-xs" />
      <div className="space-y-2">
        <h2 className="font-bold">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default ServiceDetails
