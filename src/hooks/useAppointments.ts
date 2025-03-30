import useAxios from "axios-hooks"
import { Appointment } from "../api"
import getAuthToken from "../utils/auth"

export default () => {
  const token = getAuthToken()
  const [{ data, loading, error }] = useAxios<Appointment[]>({
    url: "http://localhost:3000/appointment",
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return { data, loading, error }
}
