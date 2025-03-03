import { useFormContext } from "react-hook-form"
import { AppointmentFormType } from "../../api"
import Input from "../bookings/Input"
import Button from "../Button"
import useUsers from "../../hooks/useUsers"
import useCreateAppointment from "../../hooks/useCreateAppointment"
import { useEffect } from "react"
import axios from "axios"

function AppointmentForm() {
  // const { data, loading, error } = useUsers()
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem("token")

        const response = await axios.get("http://localhost:3000/user", {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          withCredentials: true,
        })
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    }
    fetchUsers()
  }, [])
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
        {/* {data?.map((user) => {
          return (
            <option value={user.id} key={user.id}>
              {user.username}
            </option>
          )
        })} */}
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
