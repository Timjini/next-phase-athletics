"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export type CampProgram = {
  id: string;
  title: string;
  description: string | null;
  location: string;
  slug: string;
  lat: number;
  lng: number;
  createdAt: string;
  updatedAt: string;
  sessions: Session[];
};

type Session = {
  id: string;
  label: string;
  startDate: string;
  endDate: string;
  availableSlots: number;
  price: number;
  status: "ACTIVE" | "INACTIVE";
  period: "MORNING" | "AFTERNOON" | "EVENING";
};

export const columns: ColumnDef<CampProgram>[] = [
  {
    id: "expander",
    accessorKey: "id",
    header: () => null,
    cell: ({ row }) => {
      const toggleExpanded = row.getToggleExpandedHandler();
      console.log(row.getIsExpanded());
      return row.getCanExpand() ? (
        <button
          onClick={toggleExpanded}
          style={{
            cursor: "pointer",
            background: "lightgray",
            border: "1px solid black",
          }}
        >
          {row.getIsExpanded() ? (
            <span className="text-gray-900">▼</span>
          ) : (
            <span className="text-gray-900">▶</span>
          )}{" "}
          Expand
        </button>
      ) : null;
    },
  },
  {
    header: "Program",
    accessorKey: "title",
    cell: ({ row }) => {
      const title = row.getValue("title") as string;
      const slug = row.original.slug;
      const href = `/admin/camps/${encodeURIComponent(slug.toLowerCase())}`;
      return (
        <Link href={href} className="font-medium text-blue-600 hover:underline">
          {title}
        </Link>
      );
    },
  },
  {
    header: "Location",
    accessorKey: "location",
    cell: ({ row }) => (
      <div className="text-gray-600">{row.getValue("location")}</div>
    ),
  },
  {
    header: "Total Camps",
    accessorKey: "sessions",
    cell: ({ row }) => (
      <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
        {row.original.sessions.length}
      </span>
    ),
  },
  {
    header: "Created Date",
    accessorKey: "createdAt",
    cell: ({ row }) => new Date(row.getValue("createdAt")).toLocaleDateString(),
  },
  {
    header: "Status",
    accessorKey: "sessions",
    cell: ({ row }) => {
      const activeSessions = row.original.sessions.filter(
        (session) => session.status === "ACTIVE"
      ).length;
      return (
        <div className="flex items-center">
          <span
            className={`h-2 w-2 rounded-full ${
              activeSessions > 0 ? "bg-green-500" : "bg-gray-300"
            }`}
          />
          <span className="ml-2">{activeSessions} Active</span>
        </div>
      );
    },
  },
];

export const sessionColumns: ColumnDef<Session>[] = [
  {
    header: "Session",
    accessorKey: "label",
  },
  {
    header: "Period",
    accessorKey: "period",
    cell: ({ row }) => (
      <span className="capitalize">
        {(row.getValue("period") as string).toLowerCase()}
      </span>
    ),
  },
  {
    header: "Dates",
    cell: ({ row }) => {
      const start = new Date(row.original.startDate).toLocaleDateString();
      const end = new Date(row.original.endDate).toLocaleDateString();
      return `${start} - ${end}`;
    },
  },
  {
    header: "Price",
    accessorKey: "price",
    cell: ({ row }) => `$${row.getValue("price")}`,
  },
  {
    header: "Available Slots",
    accessorKey: "availableSlots",
    cell: ({ row }) => (
      <div className="flex items-center">
        <div className="w-24 bg-gray-200 rounded-full h-2">
          <div
            className="bg-green-500 h-2 rounded-full"
            style={{
              width: `${
                ((row.getValue("availableSlots") as number) / 80) * 100
              }%`,
            }}
          />
        </div>
        <span className="ml-2">{row.getValue("availableSlots")}/80</span>
      </div>
    ),
  },
  {
    header: "Status",
    accessorKey: "status",
    cell: ({ row }) => (
      <span
        className={`px-2 py-1 rounded-full text-sm ${
          row.getValue("status") === "ACTIVE"
            ? "bg-green-100 text-green-800"
            : "bg-gray-100 text-gray-800"
        }`}
      >
        {row.getValue("status")}
      </span>
    ),
  },
];
