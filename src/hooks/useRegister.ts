import useAxios from "axios-hooks"

export default () => {
  const [{ data, loading, error }, register] = useAxios(
    {
      url: import.meta.env.VITE_APP_URL + "/auth/signup",
      method: "POST",
    },
    { manual: true },
  )
  return { data, loading, error, register }
}
