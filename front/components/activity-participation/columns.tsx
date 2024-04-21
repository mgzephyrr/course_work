"use client"

import { ColumnDef } from "@tanstack/react-table"

export type ActivityParticipanceRow = {
  id: number
  full_name: string
  avatar_filename: string
}

export const columns: ColumnDef<ActivityParticipanceRow>[] = [
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
]
