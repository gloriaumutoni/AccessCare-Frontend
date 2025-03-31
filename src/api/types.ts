export enum Role {
  ADMIN = "admin",
  DOCTOR = "doctor",
  PATIENT = "patient",
}

export interface User {
  id: number
  username: string
  email: string
  role: Role
  createdAt: string
}

export enum AppointmentStatus {
  PENDING = "PENDING",
  ACCEPTED = "ACCEPTED",
  DECLINED = "DECLINED",
  RESCHEDULED = "RESCHEDULED",
  COMPLETED = "COMPLETED",
  CANCELLED = "CANCELLED",
}

export interface Appointment {
  id: number
  owner: User
  provider: User
  start_date: string
  end_date: string
  notes: string
  status: AppointmentStatus
}
