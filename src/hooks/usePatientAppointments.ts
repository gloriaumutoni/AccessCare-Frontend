import { Appointment } from "../api"
import { useEffect, useState } from "react"
import axiosInstance from "../utils/axiosInstance"

interface PatientAppointments {
  pastAppointments: Appointment[]
  pendingAppointments: Appointment[]
}

export default () => {
  const [patientAppointments, setPatientAppointments] =
    useState<PatientAppointments>({
      pastAppointments: [],
      pendingAppointments: [],
    })

  const getPatientAppointments = async () => {
    const response = await axiosInstance.get(
      "https://accesscare-backend-production.up.railway.app/appointment/appointments-history",
    )
    setPatientAppointments(response.data)
  }

  useEffect(() => {
    getPatientAppointments()
  }, [])

  return { data: patientAppointments }
}
