import useAppointments from "../../hooks/useAppointments"
import UsersTable from "./table/UsersTable"

function AppointmentContent() {
  const { data, loading, error } = useAppointments()
  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>
  return <UsersTable users={data || []} />
}

export default AppointmentContent
