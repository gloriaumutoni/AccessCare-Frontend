import useAxios from "axios-hooks"

export default () => {
  const [{ data, loading, error }, login] = useAxios(
    {
      url: "http://localhost:3000/auth/login",
      method: "POST",
    },
    { manual: true },
  )
  return { data, loading, error, login }
}
