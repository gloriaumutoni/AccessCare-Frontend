import useAxios from "axios-hooks"

export default () => {
  const [{ data, loading, error }, login] = useAxios(
    {
      url: import.meta.env.VITE_APP_URL + "/auth/login",
      method: "POST",
    },
    { manual: true },
  )
  return { data, loading, error, login }
}
