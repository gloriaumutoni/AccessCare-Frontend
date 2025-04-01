import { useState, useMemo } from "react"
import { User } from "../api"

export const useUsers = (users: User[]) => {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortOrder, setSortOrder] = useState("asc")
  const [filterStatus, setFilterStatus] = useState("")

  const filteredUsers = useMemo(() => {
    let result = users

    if (searchTerm) {
      result = result.filter((user) =>
        user.username.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    if (filterStatus) {
      result = result.filter((user) => user.role === filterStatus)
    }

    return result
  }, [users, searchTerm, sortOrder, filterStatus])

  return {
    filteredUsers,
    searchTerm,
    setSearchTerm,
    sortOrder,
    setSortOrder,
    filterStatus,
    setFilterStatus,
  }
}
