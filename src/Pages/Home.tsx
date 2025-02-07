import Consultation from "../components/Cards/Consultation"
import Footer from "../components/Footer"
import Doctors from "../components/Home/Doctors"
import Health from "../components/Home/Health"
import HeroSection from "../components/Home/HeroSection"
import Navbar from "../components/Navbar"

function Home() {
  return (
    <>
      <div className="w-7xl mx-auto">
        <Navbar />
        <HeroSection />
        <Health />
      </div>
      <Consultation />
      <Doctors />
      <Footer />
    </>
  )
}

export default Home
