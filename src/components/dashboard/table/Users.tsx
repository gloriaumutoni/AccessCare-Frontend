import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import { StyledTableCell, StyledTableRow } from "."
import useUsers from "../../../hooks/useUsers"

interface UserProps {
  id: string
  username: string
  email: string
  role: string
}
;[]

const createData = ({ id, username, email, role }: UserProps) => ({
  id,
  username,
  email,
  role,
})

export default function UsersContent() {
  const { data, loading, error } = useUsers()

  const rows = data
    ? data.map((user: UserProps) => createData({ ...user }))
    : []
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Id</StyledTableCell>
            <StyledTableCell align="left">Username</StyledTableCell>
            <StyledTableCell align="left">Email</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows
            .filter((row) => row.role === "patient")
            .map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row">
                  {row.id}
                </StyledTableCell>
                <StyledTableCell align="left">{row.username}</StyledTableCell>
                <StyledTableCell align="left">{row.email}</StyledTableCell>
              </StyledTableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
