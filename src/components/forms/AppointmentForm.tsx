import { useFormContext } from "react-hook-form"
import { AppointmentFormType } from "../../api"
import Input from "../bookings/Input"
import Button from "../Button"
import useUsers from "../../hooks/useUsers"
import useCreateAppointment from "../../hooks/useCreateAppointment"

function AppointmentForm() {
  const { data, loading, error } = useUsers()
  const {
    data: appointmentData,
    loading: appointmentLoading,
    error: appointmentError,
    createAppointment,
  } = useCreateAppointment()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormContext<AppointmentFormType>()
  const SubmitData = (formData: AppointmentFormType) => {
    createAppointment({ data: { ...formData, doctor_id: formData.doctor } })
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

      <select
        {...register("doctor")}
        className="border w-full rounded-md bg-gray-100 py-1 border-primary-400 indent-3 outline-none"
      >
        {data?.map((user) => {
          return (
            <option value={user.id} key={user.id}>
              {user.username}
            </option>
          )
        })}
        <option value="1sfasfafasdfas">Example 1</option>
      </select>

      <div className="flex justify-center">
        <Button className="w-xs rounded-lg mt-3 py-2">
          {appointmentLoading ? "Creating..." : "Book Appointment"}
        </Button>
      </div>
    </form>
  )
}

export default AppointmentForm
