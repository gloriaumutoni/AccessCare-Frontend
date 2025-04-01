import DoctorApppointmentActionTable from "./table/DoctorApppointmentActionTable"
import useDoctorsAction from "../../hooks/useDoctorsAction"
import useAppointments from "../../hooks/useAppointments"
import { DoctorActionDto } from "../../api"

function DoctorsActionContent() {
  const { data, loading, error } = useAppointments()
  const { doctorAction, actionLoading } = useDoctorsAction()

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  const handleAction = async (
    appointmentId: number,
    action: DoctorActionDto,
  ) => {
    try {
      await doctorAction(appointmentId, action)
      window.location.reload()
    } catch (error) {
      console.error("Error updating appointment:", error)
    }
  }

  return (
    <DoctorApppointmentActionTable
      appointments={data || []}
      onAction={handleAction}
      isActionLoading={actionLoading}
    />
  )
}

export default DoctorsActionContent
