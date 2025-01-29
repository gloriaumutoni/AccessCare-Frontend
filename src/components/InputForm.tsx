// import Button from "./Button"
import Input from "./Input"

function InputForm() {
  return (
    <form className="flex gap-3 border-primary-400">
      <Input
        label="Name"
        className="w-3xs"
        type="text"
        placeholder="Enter patients name"
      />
      <Input
        label="Phone"
        className="w-20"
        type="telephone"
        placeholder="+250"
      />
      <Input
        label="Password"
        className="w-3xs"
        type="password"
        placeholder="xxxxxxxxxxx"
      />
      {/* <Button className="w-3xs">Submit</Button> */}
    </form>
  )
}

export default InputForm
