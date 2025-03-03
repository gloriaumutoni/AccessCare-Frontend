const DoctorsContent = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <div className="flex justify-between mb-4">
        <Input placeholder="Search in list..." className="w-1/3" />
        <div className="flex gap-2">
          <Button variant="outline">Sort A-Z</Button>
          <Button variant="outline">Filter</Button>
          <Button className="bg-black text-white">+ Create Job</Button>
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-100">
            <TableHead>Company</TableHead>
            <TableHead>Job Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Work Type</TableHead>
            <TableHead>Publish Date</TableHead>
            <TableHead>Created By</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {jobs.map((job, index) => (
            <TableRow key={index}>
              <TableCell>{job.company}</TableCell>
              <TableCell>{job.job}</TableCell>
              <TableCell>
                <span
                  className={`px-2 py-1 text-sm rounded ${statusStyles[job.status]}`}
                >
                  {job.status}
                </span>
              </TableCell>
              <TableCell>{job.workType}</TableCell>
              <TableCell>{job.date}</TableCell>
              <TableCell>{job.createdBy}</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>View Details</DropdownMenuItem>
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default DoctorsContent
