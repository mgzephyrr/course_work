"use client"

import { ColumnDef } from "@tanstack/react-table"

export type OrganisationMember = {
  full_name: string
  avatar_filename: string
  role: "Глава" | "Участник"
}

export const columns: ColumnDef<OrganisationMember>[] = [
  {
    accessorKey: "avatar_filename",
    header: "Аватар",
    id: "Аватар",
    cell: ({ row }) => (
      <div className={`h-[48px] w-[48px] bg-cover rounded-full`}
           style={{ backgroundImage: `url(/images/${row.getValue("Аватар")})`}}
      >
      </div>
    )
  },
  {
    accessorKey: "full_name",
    header: "ФИО",
    id: "ФИО",
    cell: ({ row }) => (
      <div className="capitalize lg:font-medium">{row.getValue("ФИО")}</div>
    ),
  },
  {
    accessorKey: "role",
    header: "Роль",
    id: "Роль",
    cell: ({ row }) => (
      <div className="capitalize lg:font-medium">{row.getValue("Роль")}</div>
    ),
  },
]
