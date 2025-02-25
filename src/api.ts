export type SignUpFormType = {
  username: string
  email: string
  password: string
  comfirmPassword: string
}
export type LogInFormType = {
  email: string
  password: string
}
export type AppointmentFormType = {
  start_date: Date
  end_date: Date
  notes: string
  doctor: string
}
