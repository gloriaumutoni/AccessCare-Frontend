import { IoChatbubblesOutline } from "react-icons/io5"

interface Props {
  details: {
    id: number
    name: string
    specialization: string
    image: string
  }[]
}

function DoctorsDetails({ details }: Props) {
  return (
    <div className="grid grid-cols-3 gap-3 mt-8">
      {details.map((doctor) => (
        <div
          key={doctor.id}
          className="text-primary-400 text-center space-y-3 my-4"
        >
          <img src={doctor.image} alt={doctor.name} />
          <p>{doctor.name}</p>
          <h2 className="text-xl">{doctor.specialization}</h2>
          <div className="flex justify-evenly">
            <IoChatbubblesOutline className="text-2xl" />
            <h3 className="text-lg">Chat</h3>
          </div>
        </div>
      ))}
    </div>
  )
}

export default DoctorsDetails
