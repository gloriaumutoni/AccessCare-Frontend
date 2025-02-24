import { doctors } from "../../data/doctors"

function DoctorsContent() {
  return (
    <div className="flex justify-center items-center">
      <table className="w-full border-collapse border border-gray-200 shadow-md rounded-lg">
        <thead className="">
          <tr>
            <th className="p-3 border border-gray-300">ID</th>
            <th className="p-3 border border-gray-300">First Name</th>
            <th className="p-3 border border-gray-300">Last Name</th>
            <th className="p-3 border border-gray-300">Specialist</th>
            <th className="p-3 border border-gray-300">Gender</th>
            {/* <th className="p-3 border border-gray-300">Location</th> */}
          </tr>
        </thead>

        <tbody>
          {doctors.map((doctor, index) => (
            <tr
              key={doctor.id}
              className={`${
                index % 2 === 0 ? "bg-gray-100" : "bg-white"
              } hover:bg-blue-100 transition`}
            >
              <td className="p-3 border border-gray-300">{doctor.id}</td>
              <td className="p-3 border border-gray-300">
                {doctor.first_name}
              </td>
              <td className="p-3 border border-gray-300">{doctor.last_name}</td>
              <td className="p-3 border border-gray-300">
                {doctor.specialist}
              </td>
              <td className="p-3 border border-gray-300">{doctor.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DoctorsContent
