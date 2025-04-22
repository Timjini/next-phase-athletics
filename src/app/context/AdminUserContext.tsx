"use client";

import { createContext, useContext } from "react";
import type { SafeUser } from "@/app/types/user";

export const AdminUserContext = createContext<SafeUser | null>(null);

export const useAdminUser = (): SafeUser => {
  const context = useContext(AdminUserContext);
  if (!context) {
    throw new Error("useAdminUser must be used within AdminUserContext.Provider");
  }
  return context;
};