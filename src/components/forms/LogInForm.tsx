import { useFormContext } from "react-hook-form"
import { LogInFormType } from "../../api"
import Input from "../bookings/Input"
import Button from "../Button"
import { useNavigate } from "react-router"
import useAuth from "../../hooks/useAuth"
import { useEffect } from "react"
import { PATHS } from "../../routes/constants"

function LogInForm() {
  const { data, loading, error, login } = useAuth()

  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormContext<LogInFormType>()
  const SubmitData = (data: LogInFormType) => {
    login({ data })
  }
  useEffect(() => {
    if (data) {
      localStorage.setItem("token", data.access_token)
      localStorage.setItem("user", JSON.stringify(data.user))
      if (data.user.role === "patient") {
        navigate(PATHS.DASHBOARD.PATIENT.ROOT)
      }
      if (data.user.role === "admin") {
        navigate(PATHS.DASHBOARD.ADMIN.ROOT)
      }
      if (data.user.role === "doctor") {
        navigate(PATHS.DASHBOARD.DOCTOR.ROOT)
      }
    }
  }, [data])

  if (loading) return <div className="text-gray-500">Loading...</div>
  if (error) return <div className="text-red-500">{error.message}</div>

  return (
    <form className="space-y-4" onSubmit={handleSubmit(SubmitData)}>
      <Input
        label="Email"
        placeholder="Enter your email"
        className="rounded-md w-xs"
        register={register("email")}
        errorMessage={errors.email?.message}
      />
      <Input
        label="Password"
        placeholder="******"
        type="password"
        className="rounded-md w-xs"
        register={register("password")}
        errorMessage={errors.password?.message}
      />
      {error && <p className="text-red-500">Something went wrong</p>}
      <div className="flex justify-center">
        <Button className="w-xs rounded-lg mt-3 py-2">LogIn</Button>
      </div>
    </form>
  )
}

export default LogInForm
