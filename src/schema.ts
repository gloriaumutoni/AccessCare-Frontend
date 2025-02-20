import z from "zod"

const formSchema = z
  .object({
    username: z.string().min(3).max(30),
    email: z.string().email(),
    password: z.string().min(5).max(20),
    comfirmPassword: z.string().min(5).max(20),
  })
  .refine((data) => data.password === data.comfirmPassword, {
    message: "passwords don't match",
    path: ["comfirmPassword"],
  })

export default formSchema
