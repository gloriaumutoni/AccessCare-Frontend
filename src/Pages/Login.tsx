import Input from "../components/Bookings/Input"
import Button from "../components/Button"
import Logo from "../components/Logo"

function Login() {
  return (
    <div className="flex min-h-screen">
      <div className="w-2xl">
        <img src="/equipments.png" alt="Doctors equipments" />
      </div>
      <div>
        <Logo className="absolute right-12" />
        <h2 className="font-bold ">Welcome back!</h2>
        <p>Enter your Credentials to access your account</p>
        <Input
          label="Email"
          placeholder="Enter you email"
          className="rounded-7xl"
        />
        <Input
          label="Password"
          placeholder="****"
          type="password"
          className="rounded-2xl"
        />
        <Button className="w-lg rounded-2xl">Login</Button>
      </div>
    </div>
  )
}

export default Login
