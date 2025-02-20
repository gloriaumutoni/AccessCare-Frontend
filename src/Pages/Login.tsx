import { Link } from "react-router"
import Logo from "../components/Logo"
import { PATHS } from "../routes/constants"
import { FormProvider, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import LogInFormSchema from "../schemas/LogInFormSchema"
import LogInForm from "../components/forms/LogInForm"
import { LogInFormType } from "../api"

function LogIn() {
  const { ...methods } = useForm<LogInFormType>({
    resolver: zodResolver(LogInFormSchema),
  })

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
          <FormProvider {...methods}>
            <LogInForm />
          </FormProvider>
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
