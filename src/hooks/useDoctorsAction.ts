// useDoctorsAction.ts hook
import { useState } from "react"
import { apiClient } from "../api/auth"
import { DoctorActionDto } from "../api"

export default () => {
  const [actionLoading, setActionLoading] = useState(false)
  const [actionError, setActionError] = useState<Error | null>(null)

  const doctorAction = async (
    appointmentId: number,
    action: DoctorActionDto,
  ) => {
    try {
      setActionLoading(true)
      setActionError(null)
      const response = await apiClient.patch(
        `/appointment/${appointmentId}/doctor-action`,
        action,
      )
      return response.data
    } catch (error) {
      setActionError(error as Error)
      throw error
    } finally {
      setActionLoading(false)
    }
  }

  return {
    doctorAction,
    actionLoading,
    actionError,
  }
}
