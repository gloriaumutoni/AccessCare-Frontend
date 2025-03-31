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

    result = result.sort((a, b) => {
      if (sortOrder === "asc") return a.start_date.localeCompare(b.start_date)
      if (sortOrder === "desc") return b.start_date.localeCompare(a.start_date)
      if (sortOrder === "newest")
        return (
          new Date(b.start_date).getTime() - new Date(a.start_date).getTime()
        )
      if (sortOrder === "oldest")
        return (
          new Date(a.start_date).getTime() - new Date(b.start_date).getTime()
        )
      return 0
    })

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
