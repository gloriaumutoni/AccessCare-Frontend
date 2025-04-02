import useAxios from "axios-hooks"
import { Appointment } from "../api"
import getAuthToken from "../utils/auth"
import { useEffect, useState } from "react"
import axiosInstance from "../utils/axiosInstance"

export default () => {
  const [patientAppointments, setPatientAppointments] = useState<Appointment[]>(
    [],
  )

  const getPatientAppointments = async () => {
    const response = await axiosInstance.get(
      "http://localhost:3000/appointment/appointments-history",
    )
    setPatientAppointments(response.data)
  }

  useEffect(() => {
    getPatientAppointments()
  }, [])

  // const [{ data, loading, error }] = useAxios<{ data: Appointment[] }>({
  //   url: "http://localhost:3000/appointment/appointments-history",
  //   method: "GET",
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //     "Content-Type": "application/json",
  //   },
  // })

  // useEffect(() => {
  //   try {
  // const userStr = localStorage.getItem("user")

  // if (!userStr) {
  //   setPatientAppointments([])
  //     //   return
  //     // }

  //     // if (!data?.data || !Array.isArray(data.data)) {
  //     //   setPatientAppointments([])
  //     //   return
  //     // }

  //     // const currentUser = JSON.parse(userStr)

  //     // if (!currentUser?.id) {
  //     //   setPatientAppointments([])
  //     //   return
  //     // }

  //     // const filtered = data.data.filter(
  //     //   (appointment) => appointment.owner.id === currentUser.id,
  //     // )
  //     // setPatientAppointments(data.data)
  //   } catch (error) {
  //     console.error("Error filtering patient appointments:", error)
  //     // setPatientAppointments([])
  //   }
  // }, [data])

  // if (error) {
  //   console.error("API Error:", error)
  // }

  return { data: patientAppointments }
}
