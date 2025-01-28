import Input from "./Input"

function Form() {
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
    </form>
  )
}

export default Form
