import AboutUs from "../components/Bookings/AboutUs"
import DoctorInformation from "../components/Bookings/DoctorInformation"
import DoctorsDetails from "../components/Cards/Cards"
import Footer from "../components/Footer"
import Header from "../components/Bookings/Header"
import Navbar from "../components/Navbar"
import PersonalInformation from "../components/Bookings/PersonalInformation"
import { doctorsDetails } from "../components/data/data"

function Bookings() {
  return (
    <>
      <div className="w-7xl m-auto">
        <Navbar />
        <Header />
        <PersonalInformation />
        <div className="flex gap-4">
          <DoctorInformation />
          <DoctorsDetails details={doctorsDetails} />
        </div>
      </div>
      <AboutUs />
      <Footer />
    </>
  )
}

export default Bookings
