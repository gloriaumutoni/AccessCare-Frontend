import { Appointment, DoctorActionDto } from "../../../api"
import { AppointmentStatus } from "../../../api/types"
import { useAppointmentsData } from "../../../hooks/useAppointmentsData"
import { useEffect, useState } from "react"
import Button from "../../Button"

interface AppointmentsTableProps {
  appointments: Appointment[]
  onAction: (appointmentId: number, action: DoctorActionDto) => Promise<void>
  isActionLoading: boolean
}

const DoctorApppointmentActionTable = ({
  appointments,
  onAction,
  isActionLoading,
}: AppointmentsTableProps) => {
  const [doctorAppointments, setDoctorAppointments] = useState<Appointment[]>(
    [],
  )

  useEffect(() => {
    try {
      const userStr = localStorage.getItem("user")
      if (userStr) {
        const currentUser = JSON.parse(userStr)
        if (currentUser?.id) {
          const filtered = appointments.filter(
            (appointment) => appointment.provider.id === currentUser.id,
          )
          setDoctorAppointments(filtered)
        }
      }
    } catch (error) {
      console.error("Error parsing user data:", error)
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
            <th className="border p-2">Patient</th>
            <th className="border p-2">Date</th>
            <th className="border p-2">Notes</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredAppointments.map((appointment) => (
            <tr key={appointment.id} className="border">
              <td className="border p-2">{appointment.owner.username}</td>
              <td className="border p-2">{appointment.start_date}</td>
              <td className="border p-2">{appointment.notes}</td>
              <td className="border p-2">{appointment.status}</td>
              <td className="border p-2">
                <div className="flex gap-2">
                  {appointment.status === AppointmentStatus.PENDING && (
                    <>
                      <Button
                        onClick={() => {
                          onAction(appointment.id, {
                            action: "accepted",
                            notes: "Appointment accepted by doctor",
                          })
                        }}
                        disabled={isActionLoading}
                        className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
                      >
                        Accept
                      </Button>
                      <Button
                        onClick={() => {
                          onAction(appointment.id, {
                            action: "declined",
                            notes: "Appointment declined by doctor",
                          })
                        }}
                        disabled={isActionLoading}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                      >
                        Decline
                      </Button>
                    </>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DoctorApppointmentActionTable
