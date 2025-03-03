import { z } from "zod"

const AppointmentFormSchema = z.object({
  start_date: z.string().transform((value) => new Date(value)),
  end_date: z.string().transform((value) => new Date(value)),
  notes: z.string().min(4).max(20),
  doctor: z.string().min(4).max(20),
})
export default AppointmentFormSchema
