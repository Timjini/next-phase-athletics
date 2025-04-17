'use client';

import { ReactNode, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useClientAuth } from '../../../lib/auth-client';

interface RoleBasedRouteProps {
  children: ReactNode;
  allowedRoles: string[];
  redirectPath?: string;
}

export function RoleBasedRoute({
  children,
  allowedRoles,
  redirectPath = '/',
}: RoleBasedRouteProps) {
  const { isAuthenticated, role } = useClientAuth();
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);
  const [redirected, setRedirected] = useState(false);  // To track if we've already redirected

  useEffect(() => {
    if (isChecking) return;

    if (!isAuthenticated && !redirected) {
      setRedirected(true);
      router.push(`/sign-in?redirect=${encodeURIComponent(window.location.pathname)}`);
      return;
    }

    if (role && !allowedRoles.includes(role)) {
      router.push(redirectPath);
    }
  }, [isAuthenticated, role, allowedRoles, redirectPath, router, isChecking, redirected]);

  useEffect(() => {
    if (!isChecking) return;
    setIsChecking(false);
  }, [isChecking]);

  if (isChecking) return null;

  if (isAuthenticated && role && allowedRoles.includes(role)) {
    return <>{children}</>;
  }

  return null;
}