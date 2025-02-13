import Button from "../Button"
import PatientGoal from "../PatientGoal"

const details = [
  "Stay Updated About Your Health",
  "Check Your Results Online",
  "Manage Your Appointments",
]

function Consultation() {
  return (
    <section className="bg-secondary py-28">
      <div className="flex justify-between w-7xl mx-auto">
        <Button
          buttonType
          title="Free consultation"
          text="Consultation with the best"
          imgSrc="/Frame.png"
          alt="Phone"
        />
        <div className="w-xl space-y-8">
          <div className="space-y-3">
            <p className="text-primary-400 text-l font-medium">
              HELPING PATIENTS FROM AROUND THE GLOBE!!
            </p>
            <h1 className="text-primary-500 font-bold text-4xl">
              Patient <span className="text-primary-400">Caring</span>
            </h1>
          </div>
          <p className="text-gray-400">
            Our goal is to deliver quality of care in a courteous, respectful,
            and compassionate manner. We hope you will allow us to care for you
            and strive to be the first and best choice for healthcare.
          </p>
          <PatientGoal details={details} />
        </div>
      </div>
    </section>
  )
}

export default Consultation
