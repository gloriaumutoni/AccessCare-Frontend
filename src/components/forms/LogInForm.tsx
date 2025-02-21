import { useFormContext } from "react-hook-form"
import { LogInFormType } from "../../api"
import Input from "../bookings/Input"
import Button from "../Button"
import { apiClient } from "../../api/auth"
import { useNavigate } from "react-router"

function LogInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormContext<LogInFormType>()
  const navigate = useNavigate()
  const SubmitData = (data: LogInFormType) => {
    apiClient
      .post("/users/login", data)
      .then((response) => {
        console.log(response.data)
        navigate("/dashboard")
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
        <Button className="w-xs rounded-lg mt-3 py-2">LogIn</Button>
      </div>
    </form>
  )
}

export default LogInForm
