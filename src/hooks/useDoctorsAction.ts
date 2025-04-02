import { useState } from "react"
import { DoctorActionDto } from "../api"
import axiosInstance from "../utils/axiosInstance"

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
      const response = await axiosInstance.patch(
        `/appointment/${appointmentId}/doctor-action`,
        { action: action.action },
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
