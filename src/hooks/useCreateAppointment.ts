import useAxios from "axios-hooks"

export default () => {
  const [{ data, loading, error }, createAppointment] = useAxios(
    {
      url: "http://localhost:3000/appointments",
      method: "POST",
    },
    {
      manual: true,
    },
  )
  return { data, loading, error, createAppointment }
}
