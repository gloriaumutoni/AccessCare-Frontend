import useAxios from "axios-hooks"

export default () => {
  const [{ data, loading, error }, register] = useAxios(
    {
      url: "http://localhost:3000/auth/signup",
      method: "POST",
    },
    { manual: true },
  )
  return { data, loading, error, register }
}
