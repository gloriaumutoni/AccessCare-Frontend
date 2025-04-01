import React from "react"
import usePatientAppointments from "../../../hooks/usePatientAppointments"
import { useAppointmentsData } from "../../../hooks/useAppointmentsData"

const AppointmentHistory: React.FC = () => {
  const { data, loading, error } = usePatientAppointments()
  const {
    filteredAppointments,
    searchTerm,
    setSearchTerm,
    sortOrder,
    setSortOrder,
  } = useAppointmentsData(data || [])

  if (loading) return <div className="p-4">Loading appointments...</div>
  if (error)
    return <div className="p-4 text-red-500">Error: {error.message}</div>

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
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                Doctor
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                Date & Time
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                Duration
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                Notes
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredAppointments.map((appointment) => (
              <tr key={appointment.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap border-b">
                  <div className="text-sm font-medium text-gray-900">
                    {appointment.provider.username}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap border-b">
                  <div className="text-sm text-gray-900">
                    {new Date(appointment.start_date).toLocaleDateString()}
                  </div>
                  <div className="text-sm text-gray-500">
                    {new Date(appointment.start_date).toLocaleTimeString()}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap border-b">
                  <div className="text-sm text-gray-900">
                    {Math.round(
                      (new Date(appointment.end_date).getTime() -
                        new Date(appointment.start_date).getTime()) /
                        (1000 * 60),
                    )}{" "}
                    minutes
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap border-b">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      appointment.status === "completed"
                        ? "bg-green-100 text-green-800"
                        : appointment.status === "cancelled"
                          ? "bg-red-100 text-red-800"
                          : appointment.status === "pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {appointment.status}
                  </span>
                </td>
                <td className="px-6 py-4 border-b">
                  <div className="text-sm text-gray-900">
                    {appointment.notes || "No notes"}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AppointmentHistory
