import { OrganisationMember, columns } from "./columns"
import { DataTable } from "./data-table"

export default async function OrganisationMembersTable() {
  //const data = await getParticipationData();
  const data = [
      {
        id: 1,
        full_name: 'Кудлай Александр Андреевич',
        avatar_filename: "b045660a-699d-44dd-8f4a-669753ebe066.jpg",
        role: "Глава"
      },
      {
        id: 2,
        full_name: "Панов Игнат Константинович",
        avatar_filename: "ce8cd011-cf43-4bbc-b5c7-5b49fa1e290d.jpg",
        role: "Участник"
      },
      {
        id: 3,
        full_name: "Талан Кирилл Антонович",
        avatar_filename: "0f2ec1cd-c8c6-4853-af29-c993bc53366b.jpg",
        role: "Участник"
      },
    ] as OrganisationMember[]

  return (
    <DataTable columns={columns} data={data} />
  )
}
