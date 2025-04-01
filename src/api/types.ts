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
  PENDING = "pending",
  ACCEPTED = "accepted",
  DECLINED = "declined",
  RESCHEDULED = "rescheduled",
  COMPLETED = "completed",
  CANCELLED = "cancelled",
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
