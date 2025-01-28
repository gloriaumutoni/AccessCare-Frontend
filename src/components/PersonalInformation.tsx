import InputForm from "./InputForm"

function PersonalInformation() {
  return (
    <div className="flex gap-3">
      <div>
        <p>Only for medical treatment</p>
        <fieldset className="flex">
          <p>Treatment Injuiry for</p>
          <label>
            <input type="radio" value="option1" name="options" />
            MySelf
          </label>
          <label>
            <input type="radio" value="option2" name="options" />
            Someone
          </label>
        </fieldset>
      </div>
      <InputForm />
    </div>
  )
}
export default PersonalInformation
