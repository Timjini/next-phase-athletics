"use client";

import { useAdminUser } from "@/app/context/AdminUserContext";

export default function AdminPage() {
  try {
    const user = useAdminUser();

    return (
        <div className="p-4">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <p>Welcome, {user?.firstName}!</p>
        </div>
    );
  } catch (error) {
    console.error("Admin page error:", error);
    return <div>An error occurred. Please try again later.</div>;
  }
}
