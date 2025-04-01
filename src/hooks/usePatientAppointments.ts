import useAxios from "axios-hooks"
import { Appointment } from "../api"
import getAuthToken from "../utils/auth"
import { useEffect, useState } from "react"

export default () => {
  const token = getAuthToken()
  const [patientAppointments, setPatientAppointments] = useState<Appointment[]>(
    [],
  )

  const [{ data, loading, error }] = useAxios<{ data: Appointment[] }>({
    url: "http://localhost:3000/appointment/all",
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  })

  useEffect(() => {
    try {
      const userStr = localStorage.getItem("user")

      if (!userStr) {
        setPatientAppointments([])
        return
      }

      if (!data?.data || !Array.isArray(data.data)) {
        setPatientAppointments([])
        return
      }

      const currentUser = JSON.parse(userStr)

      if (!currentUser?.id) {
        setPatientAppointments([])
        return
      }

      const filtered = data.data.filter(
        (appointment) => appointment.owner.id === currentUser.id,
      )
      setPatientAppointments(filtered)
    } catch (error) {
      console.error("Error filtering patient appointments:", error)
      setPatientAppointments([])
    }
  }, [data])

  if (error) {
    console.error("API Error:", error)
  }

  return { data: patientAppointments, loading, error }
}
