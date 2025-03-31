import useAxios from "axios-hooks"
import { User } from "../api"
import getAuthToken from "../utils/auth"

export default () => {
  const token = getAuthToken()
  const [{ data, loading, error }] = useAxios<User[]>({
    url: "http://localhost:3000/appointment/doctors",
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return { data, loading, error }
}
