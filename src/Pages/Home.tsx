import Footer from "../components/Footer"
import Health from "../components/Home/Health"
import HeroSection from "../components/Home/HeroSection"
import Navbar from "../components/Navbar"

function Home() {
  return (
    <>
      <div className="w-7xl m-auto">
        <Navbar />
        <HeroSection />
        <Health />
      </div>
      <Footer />
    </>
  )
}

export default Home
