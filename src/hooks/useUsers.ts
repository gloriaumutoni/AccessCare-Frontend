import useAxios from "axios-hooks"

export default () => {
  const [{ data, loading, error }] = useAxios({
    url: "http://localhost:3000/user",
    method: "GET",
  })
  return { data, loading, error }
}
