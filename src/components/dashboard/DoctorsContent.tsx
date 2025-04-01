import useAppointments from "../../hooks/useAppointments"
import AppointmentsTable from "./table/AppointmentsTable"

function DoctorsContent() {
  const { data, loading, error } = useAppointments()
  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>
  return <AppointmentsTable appointments={data || []} />
}

export default DoctorsContent
