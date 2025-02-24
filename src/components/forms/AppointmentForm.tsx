import { useFormContext } from "react-hook-form"
import { AppointmentFormType } from "../../api"
import Input from "../bookings/Input"
import Button from "../Button"

function AppointmentForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormContext<AppointmentFormType>()
  const SubmitData = (data: AppointmentFormType) => {
    console.log(data)
  }
  return (
    <form className="space-y-4" onSubmit={handleSubmit(SubmitData)}>
      <Input
        label="Username"
        placeholder="Enter your username"
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
        label="Date"
        placeholder="Enter Date"
        type="date"
        className="rounded-md w-xs"
        register={register("date")}
        errorMessage={errors.date?.message}
      />
      <Input
        label="Time"
        placeholder="Enter Time"
        type="time"
        className="rounded-md w-xs"
        register={register("time")}
        errorMessage={errors.time?.message}
      />
      <Input
        label="Doctor's Name"
        placeholder="Enter Doctor"
        type="text"
        className="rounded-md w-xs"
        register={register("doctor")}
        errorMessage={errors.doctor?.message}
      />
      <div className="flex justify-center">
        <Button className="w-xs rounded-lg mt-3 py-2">Book Appointment</Button>
      </div>
    </form>
  )
}

export default AppointmentForm
