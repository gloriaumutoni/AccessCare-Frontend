import useAxios from "axios-hooks"
import getAuthToken from "../utils/auth"

export default () => {
  const token = getAuthToken()
  const [{ data, loading, error }, createAppointment] = useAxios(
    {
      url: "https://accesscare-backend-production.up.railway.app/appointment",
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
    {
      manual: true,
    },
  )
  return { data, loading, error, createAppointment }
}
