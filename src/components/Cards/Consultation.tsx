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
        <button className="flex items-center cursor-pointer">
          <div className="p-3 rounded-lg bg-white w-2xs shadow-gray-500 shadow-2xs">
            <div className="flex">
              <img src="/Frame.png" alt="Phone" />
              <h1 className="text-md font-bold">Free consultation</h1>
            </div>
            <p>Consultation with the best</p>
          </div>
        </button>

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
