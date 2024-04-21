import { ParticipanceEventRow, columns } from "./columns"
import { DataTable } from "./data-table"

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

export default function ParticipationTable({data}: {data: ParticipanceEventRow[]}) {

  return (
    <DataTable columns={columns} data={data} />
  )
}
