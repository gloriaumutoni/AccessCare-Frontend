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
    <form
      className="space-y-2 flex flex-col"
      onSubmit={handleSubmit(SubmitData)}
    >
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
      <label>Appointments Description</label>
      <textarea
        {...register("notes")}
        className="border w-xs rounded-md bg-gray-100 py-1 border-primary-400 indent-3 outline-none"
      ></textarea>

      <label>Doctor's Name</label>
      <select
        {...register("doctor")}
        className="border w-xs rounded-md bg-gray-100 py-1 border-primary-400 indent-3 outline-none"
      >
        {data
          ?.filter((user) => user.role === "doctor")
          .map((user) => (
            <option value={user.id} key={user.id}>
              {user.username}
            </option>
          ))}
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
