import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import { StyledTableCell, StyledTableRow } from "."
import { doctors } from "../../../data/doctors"

interface CreateDataProps {
  Id: number
  First_name: string
  Last_name: string
  Specialist: string
  Gender: string
  Location: string
}
;[]

const createData = ({
  Id,
  First_name,
  Last_name,
  Specialist,
  Gender,
  Location,
}: CreateDataProps) => ({
  Id,
  First_name,
  Last_name,
  Specialist,
  Gender,
  Location,
})

const rows = doctors.map((doctor) => createData({ ...doctor }))

export default function UsersContent() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Id</StyledTableCell>
            <StyledTableCell align="left">First Name</StyledTableCell>
            <StyledTableCell align="left">Last Name</StyledTableCell>
            <StyledTableCell align="left">Gender</StyledTableCell>
            <StyledTableCell align="left">Specialist</StyledTableCell>
            <StyledTableCell align="left">Location</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.Id}>
              <StyledTableCell component="th" scope="row">
                {row.Id}
              </StyledTableCell>
              <StyledTableCell align="left">{row.First_name}</StyledTableCell>
              <StyledTableCell align="left">{row.Last_name}</StyledTableCell>
              <StyledTableCell align="left">{row.Gender}</StyledTableCell>
              <StyledTableCell align="left">{row.Specialist}</StyledTableCell>
              <StyledTableCell align="left">{row.Location}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
