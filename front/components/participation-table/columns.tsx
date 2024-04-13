"use client"

import { ColumnDef } from "@tanstack/react-table"

export type ParticipanceEventRow = {
  id: number
  participants_count: number
  status: "В процессе" | "Завершено" | "Предстоит"
  name: string
}

export const columns: ColumnDef<ParticipanceEventRow>[] = [
  {
    accessorKey: "status",
    header: "Статус",
    id: "Статус",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("Статус")}</div>
    ),
  },
  {
    accessorKey: "name",
    header: "Название",
    id: "Название",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("Название")}</div>
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
