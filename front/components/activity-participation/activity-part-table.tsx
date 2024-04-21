import { ActivityParticipanceRow, columns } from "./columns"
import { DataTable } from "./data-table"

export default function EventParticipationTable(
  {
    data
  } : {
    data: ActivityParticipanceRow[]
  }) {

  return (
    <DataTable columns={columns} data={data} />
  )
}
