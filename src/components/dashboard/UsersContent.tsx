import useUsers from "../../hooks/useUsers"
import UsersTable from "./table/UsersTable"

function UsersContent() {
  const { data, loading, error } = useUsers()
  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>
  return (
    <UsersTable users={data?.filter((user) => user.role === "patient") || []} />
  )
}

export default UsersContent
