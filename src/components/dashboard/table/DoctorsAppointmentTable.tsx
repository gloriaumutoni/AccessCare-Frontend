import { Appointment } from "../../../api"
import { useAppointmentsData } from "../../../hooks/useAppointmentsData"
import { useEffect, useState } from "react"

interface AppointmentsTableProps {
  appointments: Appointment[]
}

const DoctorsAppointmentTable = ({ appointments }: AppointmentsTableProps) => {
  const [doctorAppointments, setDoctorAppointments] = useState<Appointment[]>(
    [],
  )

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("user") || "{}")
    if (currentUser.id) {
      const filtered = appointments.filter(
        (appointment) => appointment.provider.id === currentUser.id,
      )
      setDoctorAppointments(filtered)
    }
  }, [appointments])

  const {
    filteredAppointments,
    searchTerm,
    setSearchTerm,
    sortOrder,
    setSortOrder,
  } = useAppointmentsData(doctorAppointments)

  return (
    <div className="p-4 w-full">
      <div className="flex flex-wrap gap-4 mb-4">
        <input
          type="text"
          placeholder="Search patients..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 rounded w-60"
        />
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="asc">Sort A-Z</option>
          <option value="desc">Sort Z-A</option>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>
      </div>
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Patient Name</th>
            <th className="border p-2">Patient Email</th>
            <th className="border p-2">Notes</th>
            <th className="border p-2">Appointment Date</th>
            <th className="border p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredAppointments.map((appointment) => (
            <tr key={appointment.id} className="border">
              <td className="border p-2">{appointment.owner.username}</td>
              <td className="border p-2">{appointment.owner.email}</td>
              <td className="border p-2">{appointment.notes}</td>
              <td className="border p-2">{appointment.start_date}</td>
              <td className="border p-2">{appointment.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DoctorsAppointmentTable
