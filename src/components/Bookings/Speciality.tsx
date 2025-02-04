import { Link } from "react-router"
import Input from "./Input"

const specialities = ["Pediatrician", "General Practitioner", "Obstetrician"]

function Speciality() {
  return (
    <div className="w-2xs bg-gray-100 border p-4 border-primary-400 rounded-sm">
      {specialities.map((speciality) => (
        <label key={speciality} className="flex gap-3 ">
          <Input type="checkbox" />
          {speciality}
        </label>
      ))}
      <Link to="#" className="text-end block text-primary-400 underline">
        Load More
      </Link>
    </div>
  )
}

export default Speciality
