import { ActivityParticipanceRow, columns } from "./columns"
import { DataTable } from "./data-table"

export default async function EventParticipationTable() {
  //const data = await getParticipationData();
  const data = [
      {
        id: 1,
        full_name: 'Воронов Виктор Алексеевич',
        avatar_filename: "8f6ac3e0-d5aa-4008-91b4-bace07d717ef.jpg",
      },
      {
        id: 2,
        full_name: "Елизаров Дмитрий Алексеевич",
        avatar_filename: "1d20d321-9030-40a3-b42c-852b510282af.jpg",
      },
      {
        id: 3,
        full_name: "Талан Кирилл Антонович",
        avatar_filename: "0f2ec1cd-c8c6-4853-af29-c993bc53366b.jpg",
      },
      {
        id: 3,
        full_name: "Levin Mikhail Lvovich",
        avatar_filename: "0e2120f1-f099-4fa7-a9c0-153bb0d1ce89.jpg",
      },
    ] as ActivityParticipanceRow[]

  return (
    <DataTable columns={columns} data={data} />
  )
}
