import { Appointment } from "../../../api"
import { useAppointmentsData } from "../../../hooks/useAppointmentsData"

interface AppointmentsTableProps {
  appointments: Appointment[]
}

const AppointmentsTable = ({ appointments }: AppointmentsTableProps) => {
  const {
    filteredAppointments,
    searchTerm,
    setSearchTerm,
    sortOrder,
    setSortOrder,
  } = useAppointmentsData(appointments)

  return (
    <div className="p-4 w-full">
      <div className="flex flex-wrap gap-4 mb-4">
        <input
          type="text"
          placeholder="Search appointments..."
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
            <th className="border p-2">Patient</th>
            <th className="border p-2">Doctor</th>
            <th className="border p-2">Notes</th>
            <th className="border p-2">Date</th>
            <th className="border p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredAppointments.map((appointment) => (
            <tr key={appointment.id} className="border">
              <td className="border p-2">{appointment.owner.username}</td>
              <td className="border p-2">{appointment.provider.username}</td>
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

export default AppointmentsTable
