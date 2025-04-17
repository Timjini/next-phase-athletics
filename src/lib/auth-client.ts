'use client';

import { useAuth } from "@clerk/nextjs";
import { UserAuthInfo, UserRole } from './types/user';
import { useEffect, useState } from "react";

export const useClientAuth = (): UserAuthInfo => {
  const { userId, isLoaded } = useAuth();
  const [userRole, setUserRole] = useState<UserRole>('user');

  useEffect(() => {
    if (userId) {
      // Fetch user role from your API
      fetch(`/api/user/${userId}`)
        .then(res => res.json())
        .then(data => setUserRole(data.role));
    }
  }, [userId]);

  if (!isLoaded) return { isAuthenticated: false, role: 'user', userId: '' };

  return {
    userId: userId || 'user_2vqxaCW9k1KE4tE9lSrnIoXqN90',
    role: userRole,
    isAuthenticated: !!userId
  };
};