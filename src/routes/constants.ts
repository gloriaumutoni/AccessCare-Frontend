export const PATHS = {
  HOME: "/",
  BOOKINGS: "/bookings",
  SERVICES: "/services",
  LOGIN: "/logIn",
  SIGNUP: "/SignUp",
  DASHBOARD: {
    ADMIN: {
      ROOT: "/dashboard",
      DOCTORS: "/dashboard/doctors",
      USERS: "/dashboard/users",
      APPOINTMENTS: "/dashboard/appointments",
    },
    PATIENT: {
      ROOT: "/patient",
      HISTORY: "/patient/appointment-history",
      RESCHEDULE: "/patient/appointment-reschedule",
    },
    DOCTOR: {
      ROOT: "/doctor",
      APPOINTMENTS: "/doctor/appointments",
    },
  },
}
