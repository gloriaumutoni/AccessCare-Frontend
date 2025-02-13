import { isRouteErrorResponse, useRouteError } from "react-router"

function NotFound() {
  const error = useRouteError()
  return (
    <>
      <h1 className="text-4xl font-medium">Ooops...</h1>
      <p className="text-lg">
        {isRouteErrorResponse(error) ? "Invalid Page" : "Unexpected Error"}
      </p>
    </>
  )
}

export default NotFound
