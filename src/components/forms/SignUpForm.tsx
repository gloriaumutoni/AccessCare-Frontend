import { useFormContext } from "react-hook-form"
import Input from "../bookings/Input"
import Button from "../Button"
import { SignUpFormType } from "../../api"
import { apiClient } from "../../api/auth"
import { useNavigate } from "react-router"

function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormContext<SignUpFormType>()

  const navigate = useNavigate()

  const SubmitData = (formData: SignUpFormType) => {
    const { comfirmPassword, ...data } = formData
    apiClient
      .post("/auth/signup", data)
      .then(() => {
        navigate("/login")
      })
      .catch((err) => console.error(err.message))
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit(SubmitData)}>
      <Input
        label="Username"
        placeholder="Enter your name"
        className="rounded-md w-xs"
        register={register("username")}
        errorMessage={errors.username?.message}
      />
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
      <Input
        label="Comfirm Password"
        placeholder="******"
        type="password"
        className="rounded-md w-xs"
        register={register("comfirmPassword")}
        errorMessage={errors.comfirmPassword?.message}
      />
      <div className="flex justify-center">
        <Button className="w-3xs rounded-lg mt-3 py-1">SignUp</Button>
      </div>
    </form>
  )
}

export default SignUpForm
