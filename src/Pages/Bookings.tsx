import AboutUs from "../components/Bookings/AboutUs"
import DoctorInformation from "../components/Bookings/DoctorInformation"
import DoctorsDetails from "../components/Bookings/DoctorsDetails"
import Footer from "../components/Footer"
import Header from "../components/Bookings/Header"
import Navbar from "../components/Navbar"
import PersonalInformation from "../components/Bookings/PersonalInformation"

function Bookings() {
  return (
    <>
      <div className="w-7xl m-auto">
        <Navbar />
        <Header />
        <PersonalInformation />
        <div className="flex gap-4">
          <DoctorInformation />
          <DoctorsDetails />
        </div>
      </div>
      <AboutUs />
      <Footer />
    </>
  )
}

export default Bookings
