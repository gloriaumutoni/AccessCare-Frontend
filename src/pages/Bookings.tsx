import AboutUs from "../components/bookings/AboutUs"
import DoctorInformation from "../components/bookings/DoctorInformation"
import DoctorsDetails from "../components/cards/Cards"
import Header from "../components/bookings/Header"
import { doctorsDetails } from "../data/data"

function Bookings() {
  return (
    <>
      <div className="w-7xl m-auto">
        <Header />
        <div className="flex gap-4">
          <DoctorInformation />
          <DoctorsDetails details={doctorsDetails} />
        </div>
      </div>
      <AboutUs />
    </>
  )
}

export default Bookings
