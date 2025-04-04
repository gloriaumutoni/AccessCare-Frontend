import useAxios from "axios-hooks"
import { User } from "../api"
import getAuthToken from "../utils/auth"

export default () => {
  const token = getAuthToken()
  const [{ data, loading, error }] = useAxios<User[]>({
    url: "https://accesscare-backend-production.up.railway.app/user",
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return { data, loading, error }
}
