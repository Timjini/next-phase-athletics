import React from "react";
import {
  flexRender,
  getCoreRowModel,
  getExpandedRowModel,
  useReactTable,
  ColumnDef,
} from "@tanstack/react-table";
import { CampProgram } from "./columns";

type Props = {
  data: CampProgram[];
  columns: ColumnDef<CampProgram, any>[];
};

export default function DataTable({ data, columns }: Props) {
  const table = useReactTable({
    data,
    columns,
    getRowId: (row) => row.id,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
  });

  return (
    <div className="rounded-lg border shadow-sm overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-50">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
  {table.getRowModel().rows.map((row) => (
    <React.Fragment key={row.id}>
      <tr className="hover:bg-gray-50">
        {row.getVisibleCells().map((cell) => (
          <td key={cell.id} className="px-6 py-4 whitespace-nowrap">
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </td>
        ))}
      </tr>
      {row.getIsExpanded() && (
        <tr key={`expanded-${row.id}`}>
          <td colSpan={columns.length} className="bg-gray-50 p-4">
            <div className="ml-8">
              <h4 className="text-sm font-semibold mb-2">Sessions</h4>
              <table className="w-full bg-white rounded-lg shadow">
                <thead>
                  <tr>
                    <th>Session</th>
                    <th>Period</th>
                    <th>Dates</th>
                    <th>Price</th>
                    <th>Available Slots</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {row.original.sessions.map((session, sessionIndex) => (
                    <tr key={`${row.id}-session-${session.id}`}> {/* Add unique key here by combining row.id and session.id */}
                      <td>{session.label}</td>
                      <td>{session.period}</td>
                      <td>
                        {new Date(session.startDate).toLocaleDateString()} -{" "}
                        {new Date(session.endDate).toLocaleDateString()}
                      </td>
                      <td>${session.price}</td>
                      <td>{session.availableSlots}</td>
                      <td>{session.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </td>
        </tr>
      )}
    </React.Fragment>
  ))}
</tbody>
      </table>
    </div>
  );
}
