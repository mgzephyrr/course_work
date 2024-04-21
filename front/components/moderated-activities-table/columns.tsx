"use client"

import { ColumnDef } from "@tanstack/react-table"

export type ModeratedActivitiesRow = {
  id: number
  participants_count: number
  status: "Принято" | "На рассмотрении"
  name: string
}

export const columns: ColumnDef<ModeratedActivitiesRow>[] = [
  {
    accessorKey: "status",
    header: "Статус",
    id: "Статус",
    cell: ({ row }) => (
      <div>{row.getValue("Статус")}</div>
    ),
  },
  {
    accessorKey: "name",
    header: "Название",
    id: "Название",
    cell: ({ row }) => (
      <div>{row.getValue("Название")}</div>
    ),
  },
  {
    accessorKey: "participants_count",
    header: "Кол-во участников",
    id: "Кол-во участников",
    cell: ({ row }) => (
      <div>{row.getValue("Кол-во участников")}</div>
    ),
  },
]
