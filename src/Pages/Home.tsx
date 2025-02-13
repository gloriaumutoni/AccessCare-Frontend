import Consultation from "../components/Cards/Consultation"
import Doctors from "../components/Home/Doctors"
import Health from "../components/Home/Health"
import HeroSection from "../components/Home/HeroSection"

function Home() {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <HeroSection />
        <Health />
      </div>
      <Consultation />
      <Doctors />
    </>
  )
}

export default Home
