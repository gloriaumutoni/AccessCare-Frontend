import { FormProvider, useForm } from "react-hook-form"
import Logo from "../components/Logo"
import { zodResolver } from "@hookform/resolvers/zod"
import signUpFormSchema from "../schemas/signUpFormSchema"
import SignUpForm from "../components/forms/SignUpForm"
import { SignUpFormType } from "../api"

function SignUp() {
  const { ...methods } = useForm<SignUpFormType>({
    resolver: zodResolver(signUpFormSchema),
  })

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="p-8 rounded-2xl shadow-2xl">
        <div className="flex flex-col space-y-1 pb-3 items-center justify-center">
          <Logo />
          <h2 className="font-bold ">Create a new account</h2>
          <p className="text-gray-400 text-sm">Enter details to register</p>
        </div>
        <FormProvider {...methods}>
          <SignUpForm />
        </FormProvider>
      </div>
    </div>
  )
}

export default SignUp
