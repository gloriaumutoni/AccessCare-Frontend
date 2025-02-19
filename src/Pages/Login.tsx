import Input from "../components/bookings/Input"
import Button from "../components/Button"
import Logo from "../components/Logo"

function Login() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="p-8 rounded-2xl shadow-2xl">
        <div className="flex flex-col space-y-1 pb-3 items-center justify-center">
          <Logo />
          <h2 className="font-bold ">Create a new account</h2>
          <p className="text-gray-400 text-sm">Enter details to register</p>
        </div>
        <div className="space-y-4">
          <Input
            label="Full Name"
            placeholder="Enter your name"
            className="rounded-md w-xs"
          />
          <Input
            label="Email"
            placeholder="Enter your email"
            className="rounded-md w-xs"
          />
          <Input
            label="Password"
            placeholder="******"
            type="password"
            className="rounded-md w-xs"
          />
          <div className="flex justify-center">
            <Button className="w-3xs rounded-lg mt-3 py-1">Login</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
