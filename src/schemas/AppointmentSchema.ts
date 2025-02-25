import { z } from "zod"

const AppointmentFormSchema = z.object({
  start_date: z.date(),
  end_date: z.date(),
  notes: z.string().min(4).max(20),
  doctor: z.string().min(4).max(20),
})
export default AppointmentFormSchema
