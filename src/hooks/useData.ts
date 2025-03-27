import { useState, useMemo } from "react"
import { User } from "../api"

export const useUsers = (users: User[]) => {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortOrder, setSortOrder] = useState("asc")
  const [filterStatus, setFilterStatus] = useState("")

  const filteredUsers = useMemo(() => {
    let result = users

    // Search filter
    if (searchTerm) {
      result = result.filter((user) =>
        user.username.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    // Status filter
    if (filterStatus) {
      result = result.filter((user) => user.role === filterStatus)
    }

    // Sorting
    result = result.sort((a, b) => {
      if (sortOrder === "asc") return a.username.localeCompare(b.username)
      if (sortOrder === "desc") return b.username.localeCompare(a.username)
      if (sortOrder === "newest")
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      if (sortOrder === "oldest")
        return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      return 0
    })

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
