import { ModeratedActivitiesRow, columns } from "./columns"
import { DataTable } from "./data-table"

export default function ModeratedActivitiesTable({
  data
} : {
  data: ModeratedActivitiesRow[]
}) {
  return (
    <DataTable columns={columns} data={data} />
  )
}
