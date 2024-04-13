import { columns } from "./columns"
import { DataTable } from "./data-table"
import { getParticipationData } from "@/app/utils";

export function GetStatus(start: string, end: string){
    const now = new Date().toISOString();
    if (now < start){
        return "Предстоит"
    }

    if (now > end){
        return "Завершено"
    }

    return "В процессе"
}

export default async function ParticipationTable() {
  const data = await getParticipationData();

  return (
    <DataTable columns={columns} data={data} />
  )
}
