// src/app/admin/layout.tsx
import { ReactNode } from "react";
import SideBar from "./_components/admin-sidebar";
import { verifyAdminAccess } from "../lib/auth";
import { SafeUser } from "../types/user";
import AdminUserProvider from "./_components/AdminUserProvider";

export default async function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  const { user }: { user: SafeUser | null } = await verifyAdminAccess();

  if (!user) {
    console.log("Admin access verification failed: User is null.");
  }

  return user ? (
    <AdminUserProvider user={user}>
      <section className="bg-gradient-to-b from-[#0046CC] to-[#09131D] min-h-screen grid grid-cols-6">
        <SideBar />
        <main className="col-span-6 lg:col-span-5">{children}</main>
      </section>
    </AdminUserProvider>
  ) : (
    <div>Access Denied</div>
  );
}
