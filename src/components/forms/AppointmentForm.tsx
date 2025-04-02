import { useForm } from "react-hook-form"
import { AppointmentFormType } from "../../api"
import Input from "../bookings/Input"
import Button from "../Button"
import useDoctors from "../../hooks/useDoctors"
import useCreateAppointment from "../../hooks/useCreateAppointment"
import toast from "react-hot-toast"

function AppointmentForm() {
  const { data, loading, error } = useDoctors()
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
    reset,
  } = useForm<AppointmentFormType>()

  const SubmitData = async (formData: AppointmentFormType) => {
    const appointmentData = { ...formData, providerId: +formData.doctor }
    try {
      await createAppointment({
        data: appointmentData,
      })
      toast.success("Appointment booked successfully!")
      reset()
    } catch (error) {
      console.error("Error creating appointment:", error)
      toast.error("Failed to book appointment. Please try again.")
    }
  }

  if (loading) {
    return <div>Loading doctors...</div>
  }

  if (error) {
    return <div>Error loading doctors: {error.message}</div>
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
        register={register("start_date", {
          required: "Start date is required",
        })}
        errorMessage={errors.start_date?.message}
      />
      <Input
        label="End_date"
        placeholder="Enter End date"
        type="date"
        className="rounded-md w-xs"
        register={register("end_date", { required: "End date is required" })}
        errorMessage={errors.end_date?.message}
      />
      <label>Appointments Description</label>
      <textarea
        {...register("notes", { required: "Description is required" })}
        className="border w-xs rounded-md bg-gray-100 py-1 border-primary-400 indent-3 outline-none"
      ></textarea>

      <label>Doctor's Name</label>
      <select
        {...register("doctor", { required: "Please select a doctor" })}
        className="border w-xs rounded-md bg-gray-100 py-1 border-primary-400 indent-3 outline-none"
      >
        <option value="">Select a doctor</option>
        {data?.map((user) => (
          <option value={user.id} key={user.id}>
            {user.username}
          </option>
        ))}
      </select>

      <div className="flex flex-col items-center gap-2">
        <Button className="w-xs rounded-lg mt-3 py-2">
          {appointmentLoading ? "Creating..." : "Book Appointment"}
        </Button>
      </div>
    </form>
  )
}

export default AppointmentForm
