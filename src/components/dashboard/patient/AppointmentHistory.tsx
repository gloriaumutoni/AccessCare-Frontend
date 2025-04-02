import React from "react"
import usePatientAppointments from "../../../hooks/usePatientAppointments"
import { useAppointmentsData } from "../../../hooks/useAppointmentsData"

const AppointmentHistory: React.FC = () => {
  const { data } = usePatientAppointments()
  console.log("data")
  const { searchTerm, setSearchTerm, sortOrder, setSortOrder } =
    useAppointmentsData(data || [])

  if (data.length === 0) return <div className="p-4">No appointments found</div>

  return (
    <div className="p-4 w-full">
      <div className="flex flex-wrap gap-4 mb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search appointments..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border rounded-4xl py-2 pl-10 pr-4 w-60"
          />
          <svg
            className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="border rounded-lg p-2 px-2"
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
            {data.pastAppointments.map((appointment) => (
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
                        : appointment.status === "declined"
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
