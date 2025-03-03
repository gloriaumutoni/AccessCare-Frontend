import useAxios from "axios-hooks"
import { User } from "../api"

export default () => {
  const [{ data, loading, error }] = useAxios<User[]>({
    url: "http://localhost:3000/user",
    method: "GET",
  })
  return { data, loading, error }
}
