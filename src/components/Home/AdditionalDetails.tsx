import { LuClock4 } from "react-icons/lu"

function AdditionalDetails() {
  return (
    <div className="bg-primary-400 flex gap-8 text-white p-12">
      <div className="flex gap-3">
        <LuClock4 className="text-black text-7xl bg-white py-5" />
        <div className="space-y-2">
          <h2 className="font-bold">24 hours services</h2>
          <p>
            Get 24/7 expert medical support ensuring your needs are always met
          </p>
        </div>
      </div>
      <div className="flex gap-3">
        <img
          className="bg-white py-4 px-3"
          src="/public/bi_clipboard2-plus.png"
          alt="bi_clipboard2-plus"
        />
        <div className="space-y-2">
          <h2 className="font-bold">Remote Patient monitoring</h2>
          <p>
            Get personalized remote monitoring ensuring continuous support
            during challenging times
          </p>
        </div>
      </div>
      <div className="flex gap-3">
        <img
          className="bg-white py-5 px-3"
          src="/public/Group.png"
          alt="health"
        />
        <div className="space-y-2">
          <h2 className="font-bold">High quality care</h2>
          <p>Delivering high-quality care tailored to your needs </p>
        </div>
      </div>
    </div>
  )
}

export default AdditionalDetails
