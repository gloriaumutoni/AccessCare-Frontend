import { z } from "zod"

const AppointmentFormSchema = z.object({
  username: z.string().min(4).max(20),
  email: z.string().email(),
  date: z.string().min(4).max(20),
  time: z.string().min(4).max(20),
  doctor: z.string().min(4).max(20),
})

export default AppointmentFormSchema
