import InputForm from "./InputForm"

function PersonalInformation() {
  return (
    <div className="flex gap-3">
      <div className="pr-12 ">
        <p className="text-primary-400/50 font-medium">
          Only for medical treatment
        </p>
        <div className="flex gap-3">
          <p>Treatment Injuiry for</p>
          <label>
            <input type="radio" value="option1" name="options" />
            MySelf
          </label>
          <label>
            <input type="radio" value="option2" name="options" />
            Someone
          </label>
        </div>
      </div>
      <InputForm />
    </div>
  )
}
export default PersonalInformation
