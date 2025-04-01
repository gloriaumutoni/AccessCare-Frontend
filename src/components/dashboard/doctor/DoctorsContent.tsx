import useDoctorAppointments from "../../../hooks/useDoctorAppointments"
import DoctorsAppointmentTable from "../table/DoctorsAppointmentTable"

function DoctorsContent() {
  const { data, loading, error } = useDoctorAppointments()
  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return <DoctorsAppointmentTable appointments={data || []} />
}

export default DoctorsContent
