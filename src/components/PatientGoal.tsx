type PatientGoals = { details: string[] }

function PatientGoal({ details }: PatientGoals) {
  return (
    <div className="space-y-5">
      {details.map((detail) => (
        <div key={detail} className="flex gap-5 text-primary-500">
          <img className="w-6" src="/star.png" alt="star" />
          <p>{detail}</p>
        </div>
      ))}
    </div>
  )
}

export default PatientGoal
