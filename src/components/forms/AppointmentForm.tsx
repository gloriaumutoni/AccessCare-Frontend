import { useFormContext } from "react-hook-form"
import { AppointmentFormType } from "../../api"
import Input from "../bookings/Input"
import Button from "../Button"
import useUsers from "../../hooks/useUsers"

function AppointmentForm() {
  const { data, loading, error } = useUsers()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormContext<AppointmentFormType>()
  const SubmitData = (formData: AppointmentFormType) => {
    console.log(data)
  }
  return (
    <form className="space-y-4" onSubmit={handleSubmit(SubmitData)}>
      <Input
        label="Start_Date"
        placeholder="Enter Date"
        type="date"
        className="rounded-md w-xs"
        register={register("start_date")}
        errorMessage={errors.start_date?.message}
      />
      <Input
        label="End_date"
        placeholder="Enter End date"
        type="date"
        className="rounded-md w-xs"
        register={register("end_date")}
        errorMessage={errors.end_date?.message}
      />
      <Input
        label="Notes"
        placeholder="Enter Notes"
        type="text"
        className="rounded-md w-xs"
        register={register("notes")}
        errorMessage={errors.notes?.message}
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
