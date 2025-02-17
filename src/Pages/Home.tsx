import Consultation from "../components/cards/Consultation"
import Doctors from "../components/home/Doctors"
import Health from "../components/home/Health"
import HeroSection from "../components/home/HeroSection"

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
