import useAxios from "axios-hooks"
import { Appointment } from "../api"
import getAuthToken from "../utils/auth"

export default () => {
  const token = getAuthToken()

  const [{ data, loading, error }] = useAxios<Appointment[]>({
    url: import.meta.env.VITE_APP_URL + "/appointment/all",
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  })
  return { data, loading, error }
}
