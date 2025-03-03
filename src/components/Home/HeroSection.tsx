import Button from "../Button"
import AdditionalDetails from "./AdditionalDetails"

function HeroSection() {
  return (
    <>
      <div className="flex justify-between mt-12">
        <div className="w-sm space-y-8 mt-12">
          <h1 className="font-bold text-4xl">Your Health Comes First.</h1>
          <p className="text-gray-500">
            With CareAccess services you will receive the best medical treatment
            in your home. Our team of skilled medical professionals and aids
            ensure that you get the care you need and deserve.
          </p>
          <Button className="rounded-sm w-3xs py-3">Consult Doctor</Button>
        </div>
        <div className="relative px-14">
          <img className="w-sm" src="/landing_page_nurse.png" alt="Nurse" />
          <img
            className="w-32 absolute top-[50%] right-0"
            src="/public/patients_number.png"
            alt="Patients number"
          />
        </div>
        <div className="flex flex-col justify-evenly">
          <img className="w-32" src="/public/Arc.png" alt="Arc" />
          <p className="text-gray-500 w-xs">
            <span className="text-2xl text-primary-400">“</span>A trusted
            assistance companion for your health needs.
            <span className="text-2xl text-primary-400">”</span>
          </p>
        </div>
      </div>
      <AdditionalDetails />
    </>
  )
}

export default HeroSection
