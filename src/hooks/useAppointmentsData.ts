import { useState, useMemo } from "react"
import { Appointment } from "../api"

export const useAppointmentsData = (appointments: Appointment[]) => {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortOrder, setSortOrder] = useState("asc")

  const filteredAppointments = useMemo(() => {
    let result = appointments

    if (searchTerm) {
      result = result.filter(
        (appointment) =>
          appointment.owner.username
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          appointment.provider.username
            .toLowerCase()
            .includes(searchTerm.toLowerCase()),
      )
    }

    return result
  }, [appointments, searchTerm, sortOrder])

  return {
    filteredAppointments,
    searchTerm,
    setSearchTerm,
    sortOrder,
    setSortOrder,
  }
}
