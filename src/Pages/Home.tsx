import Footer from "../components/Footer"
import HeroSection from "../components/Home/HeroSection"
import Navbar from "../components/Navbar"

function Home() {
  return (
    <>
      <div className="w-7xl m-auto">
        <Navbar />
        <HeroSection />
      </div>
      <Footer />
    </>
  )
}

export default Home
