import InputForm from "./InputForm"
import RadioButtons from "./RadioButtons"

function PersonalInformation() {
  return (
    <div className="flex gap-3">
      <div className="pr-12 ">
        <p className="text-primary-400/50 font-medium">
          Only for medical treatment
        </p>
        <div className="flex gap-3">
          <p>Treatment Injuiry for</p>
          <RadioButtons label1="Myself" label2="Someone" />
        </div>
      </div>
      <InputForm />
    </div>
  )
}
export default PersonalInformation
