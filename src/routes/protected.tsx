import { Navigate, Outlet } from "react-router"
import getAuthToken from "../utils/auth"
import { PATHS } from "./constants"

function ProtectedRoutes() {
  const token = getAuthToken()
  return token ? <Outlet /> : <Navigate to={PATHS.LOGIN} />
}

export default ProtectedRoutes
