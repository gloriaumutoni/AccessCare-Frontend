import { zodResolver } from "@hookform/resolvers/zod"
import { FormProvider, useForm } from "react-hook-form"
import { AppointmentFormType } from "../../../api"
import AppointmentFormSchema from "../../../schemas/AppointmentSchema"
import AppointmentForm from "../../forms/AppointmentForm"

function PatientContent() {
  const { ...methods } = useForm<AppointmentFormType>({
    resolver: zodResolver(AppointmentFormSchema),
  })
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full ">
      <div className="p-8 rounded-2xl shadow-2xl">
        <div className="flex flex-col space-y-1 pb-3 items-center justify-center">
          <h2 className="font-bold ">Book Appointment</h2>
          <p className="text-gray-400 text-sm">Enter booking details</p>
        </div>
        <FormProvider {...methods}>
          <AppointmentForm />
        </FormProvider>
      </div>
    </div>
  )
}

export default PatientContent
