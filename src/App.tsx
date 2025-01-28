import "./App.css"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import PersonalInformation from "./components/PersonalInformation"

export default function App() {
  return (
    <div className="w-7xl m-auto">
      <Navbar />
      <Header />
      <PersonalInformation />
    </div>
  )
}
