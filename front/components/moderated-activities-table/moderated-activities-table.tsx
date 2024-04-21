import { ModeratedActivitiesRow, columns } from "./columns"
import { DataTable } from "./data-table"
import { getParticipationData } from "@/app/utils";

export default async function ModeratedActivitiesTable() {
  //const data = await getParticipationData();
  const data = [
    {
      id: 1,
      participants_count: 1,
      status: "На рассмотрении",
      name: "HSE FACE 2024"
    },
    {
      id: 2,
      participants_count: 9,
      status: "Принято",
      name: "СтудВесна 2024"
    },
  ] as ModeratedActivitiesRow[]

  return (
    <DataTable columns={columns} data={data} />
  )
}
