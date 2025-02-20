import { Link } from "react-router"
import Input from "../components/bookings/Input"
import Button from "../components/Button"
import Logo from "../components/Logo"
import { PATHS } from "../routes/constants"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import LogInFormSchema from "../schemas/LogInFormSchema"

type FormType = {
  email: string
  password: string
}

function LogIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>({ resolver: zodResolver(LogInFormSchema) })
  const SubmitData = (data: FormType) => {
    console.log(data)
  }
  return (
    <div className="flex flex-col items-center justify-center  h-screen">
      <div className="bg-gray-200 p-2  rounded-2xl shadow-2x">
        <div className="p-8 rounded-2xl shadow-2x bg-white">
          <div className="flex flex-col space-y-1 pb-3 items-center justify-center">
            <Logo />
            <h2 className="font-bold ">LogIn to continue</h2>
            <p className="text-gray-400 text-sm">
              Please LogIn to book an appointment
            </p>
          </div>
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
        </div>
        <p className="text-gray-400 py-3 text-center">
          Don't have an account?
          <Link className="text-black pl-2" to={PATHS.SignUp}>
            SignUp
          </Link>
        </p>
      </div>
    </div>
  )
}

export default LogIn
