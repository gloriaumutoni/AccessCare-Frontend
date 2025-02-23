import { useFormContext } from "react-hook-form"
import { LogInFormType } from "../../api"
import Input from "../bookings/Input"
import Button from "../Button"
import { apiClient } from "../../api/auth"
import { useNavigate } from "react-router"

function LogInForm() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormContext<LogInFormType>()
  const SubmitData = (data: LogInFormType) => {
    apiClient
      .post("/auth/login", data)
      .then((response) => {
        localStorage.setItem("token", response.data.access_token)
      })
      .catch((err) => console.log(err.message))
  }

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
      <div className="flex justify-center">
        <Button
          onClick={() => {
            navigate("/dashboard")
          }}
          className="w-xs rounded-lg mt-3 py-2"
        >
          LogIn
        </Button>
      </div>
    </form>
  )
}

export default LogInForm
