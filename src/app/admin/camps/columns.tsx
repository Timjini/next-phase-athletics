"use client"

import { ColumnDef } from "@tanstack/react-table"

export type CampProgram = {
    id: string;
    title: string;
    description: string | null;
    location: string;
    lat: number;
    lng: number;
    createdAt: string;
    updatedAt: string;
}

export const columns: ColumnDef<CampProgram>[] = [
    {
        header: 'ID',
        accessorKey: 'id',
      },
      {
        header: 'Title',
        accessorKey: 'title',
      },
      {
        header: 'Location',
        accessorKey: 'location',
      },
      {
        header: 'Created At',
        accessorKey: 'createdAt',
        cell: ({ row }) => new Date(row.original.createdAt).toLocaleDateString(),
      },
]
