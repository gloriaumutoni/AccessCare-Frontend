import Logo from "./Logo"

function Footer() {
  return (
    <section className="text-white bg-primary-400 p-8 divide-black">
      <div className="w-7xl mx-auto flex justify-between py-4">
        <div>
          <Logo />
          <p className="w-xs mt-2">
            Where Health is Priority. Empowering Connections, Monitoring Health
            Remotely, and Ensuring Quality Care Every Step of the Way.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold py-3">Departments</h2>
          <ul className="space-y-2">
            <li>Family Medecine</li>
            <li>Women's health</li>
            <li>Optician</li>
            <li>Pediatrics</li>
            <li>Dermetology</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold py-3">Quick links</h2>
          <ul className="space-y-2">
            <li>Our Doctors</li>
            <li>Apointment</li>
            <li>Blog Post</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="w-3xs">
          <h2 className="text-xl font-bold py-3">Blog Post</h2>
          <article className="space-y-2">
            <p className="text-black">22.05.2024</p>
            <p>The Benefits of Remote Monitoring and patient care</p>
          </article>
          <article className="space-y-2 pt-2">
            <p className="text-black">22.05.2024</p>
            <p>Health Tracker benefits where your health is in your hands</p>
          </article>
        </div>
      </div>
      <div className="border-t  border-black my-4"></div>
      <p className="text-center mt-3">Copyright 2024 All Rights Reserved.</p>
    </section>
  )
}

export default Footer
