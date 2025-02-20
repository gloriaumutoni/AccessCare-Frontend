import { useForm } from "react-hook-form"
import Input from "../components/bookings/Input"
import Button from "../components/Button"
import Logo from "../components/Logo"
import { zodResolver } from "@hookform/resolvers/zod"
import signUpFormSchema from "../schemas/signupFormSchema"

export type FormType = {
  username: string
  email: string
  password: string
  comfirmPassword: string
}

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>({
    resolver: zodResolver(signUpFormSchema),
  })

  const SubmitData = (data: FormType) => {
    console.log(data)
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="p-8 rounded-2xl shadow-2xl">
        <div className="flex flex-col space-y-1 pb-3 items-center justify-center">
          <Logo />
          <h2 className="font-bold ">Create a new account</h2>
          <p className="text-gray-400 text-sm">Enter details to register</p>
        </div>
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
      </div>
    </div>
  )
}

export default SignUp
