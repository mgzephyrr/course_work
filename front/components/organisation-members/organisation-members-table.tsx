import { OrganisationMember, columns } from "./columns"
import { DataTable } from "./data-table"

export default function OrganisationMembersTable({
  data
}: {
  data: OrganisationMember[]
}) {

  return (
    <DataTable columns={columns} data={data} />
  )
}
