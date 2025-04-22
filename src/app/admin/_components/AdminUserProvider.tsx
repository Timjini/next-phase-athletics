// src/app/admin/_components/AdminUserProvider.tsx
"use client";

import { AdminUserContext } from "@/app/context/AdminUserContext";
import { SafeUser } from "@/app/types/user";
import { ReactNode } from "react";

export default function AdminUserProvider({
  user,
  children,
}: {
  user: SafeUser;
  children: ReactNode;
}) {
  return (
    <AdminUserContext.Provider value={user}>
      {children}
    </AdminUserContext.Provider>
  );
}
