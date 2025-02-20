import axios from "axios"

interface Props {
  userId: number
  id: number
  title: string
  body: string
}

const apiClient = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
})

apiClient
  .get<Props[]>("/users/users")
  .then((response) => {
    console.log(response.data)
  })
  .catch((err) => console.log(err.message))
