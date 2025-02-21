import { z } from "zod"

const LogInFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(4).max(20),
})

export default LogInFormSchema
