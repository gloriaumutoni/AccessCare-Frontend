import BarChart from "../BarChart"
import DashboardCard from "./Card"

function DashboardContent() {
  return (
    <div>
      <h1 className="text-3xl font-medium my-4">Dashboard</h1>
      <div className="flex gap-4 justify-center items-center">
        <DashboardCard
          title="Doctors"
          participantsNumber={4}
          className="bg-blue-100"
          LinkColor="text-primary-500"
        />
        <DashboardCard
          title="Users"
          participantsNumber={4}
          className="bg-green-100"
          LinkColor="text-green-500"
        />
        <DashboardCard
          title="Appointments"
          participantsNumber={3}
          className="bg-yellow-100"
          LinkColor="text-yellow-500"
        />
      </div>
      <div className="shadow-lg mt-20">
        <BarChart />
      </div>
    </div>
  )
}

export default DashboardContent
