import useAxios from "axios-hooks"

export default () => {
  const [{ data, loading, error }, register] = useAxios(
    {
      url: "https://accesscare-backend-production.up.railway.app/auth/signup",
      method: "POST",
    },
    { manual: true },
  )
  return { data, loading, error, register }
}
