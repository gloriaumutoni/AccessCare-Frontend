import useAxios from "axios-hooks"

export default () => {
  const [{ data, loading, error }, login] = useAxios(
    {
      url: "https://accesscare-backend-production.up.railway.app/auth/login",
      method: "POST",
    },
    { manual: true },
  )
  return { data, loading, error, login }
}
