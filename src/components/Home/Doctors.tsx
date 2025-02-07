import Button from "../Button"

function Doctors() {
  return (
    <section className="flex justify-between py-24 w-7xl mx-auto">
      <div className="w-sm space-y-8">
        <article>
          <p className="font-medium text-lg">Our Doctors</p>
          <h1 className="font-bold text-3xl text-primary-400">
            Qualified Doctors
          </h1>
        </article>
        <p className="text-gray-400">
          Handled directly by general doctors and professional and experienced
          specialists doctors.
        </p>
        <div className="relative">
          <img
            className="rounded-xl"
            src="/operation room.png"
            alt="Operation room"
          />
          <div className="bg-primary-500/20 py-3 flex flex-col justify-between h-full font-light pl-7 text-white rounded-xl w-sm top-0 absolute ">
            <p>Orthpedy</p>
            <h2 className="font-bold text-2xl">Dr. James Wellington</h2>
            <p>Read More</p>
          </div>
        </div>
        <div className="flex justify-center">
          <Button className="rounded-sm py-3 px-6">View all Doctors</Button>
        </div>
      </div>
      <article>
        <img
          className="w-sm"
          src="/qualified doctors.png"
          alt="qualified doctors"
        />
      </article>
    </section>
  )
}

export default Doctors
