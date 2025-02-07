import Button from "../Button"
import Input from "./Input"
import { CiSearch } from "react-icons/ci"
import RadioButtons from "./RadioButtons"
import Speciality from "./Speciality"

function DoctorInformation() {
  return (
    <div>
      <h2 className="font-medium text-md pb-1 mt-7">Search</h2>
      <div className="flex pb-4">
        <Input placeholder="Search doctor" className="w-3xs" />
        <Button className="p-2 rounded-r-sm">
          <CiSearch />
        </Button>
      </div>
      <h2 className="font-medium text-md pt-7">Gender of doctor</h2>
      <RadioButtons label1="Male" label2="Female" />
      <h2 className="font-medium text-md pt-6">Speciliaty</h2>
      <Speciality />
      <h2 className="font-medium text-md pt-9 pb-2 ">Select hospital</h2>
      <select className="w-3xs border mb-2 rounded-xs bg-gray-100 py-1 border-primary-400 indent-3 outline-none">
        <option>Select hospital</option>
        <option>KING FAISAL HOSPITAL</option>
        <option>NDERA HOSPITAL</option>
        <option>MASAKA HOSPITAL</option>
      </select>
      <Button className="px-6 py-2 rounded-sm self-center">Show Doctor</Button>
    </div>
  )
}

export default DoctorInformation
