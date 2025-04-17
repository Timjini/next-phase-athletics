import { ReactNode, useEffect, useState } from 'react';
import { authProvider } from '@/auth';
import { useRouter } from 'next/navigation';

interface ProtectedRouteProps {
  children: ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const router = useRouter();

  useEffect(() => {
    const checkAuthentication = async () => {
      const authenticated = await authProvider.isAuthenticated();
      setIsAuthenticated(authenticated);

      // Avoid using `window` on the server-side
      if (typeof window !== 'undefined' && !authenticated) {
        // Client-side redirection only
        const redirectPath = window.location.pathname;
        await authProvider.signIn(redirectPath);
        router.push('/auth/sign-in'); // Ensure you push to the sign-in page
      }
    };

    checkAuthentication();
  }, [router]);

  // While checking authentication, render nothing
  if (isAuthenticated === null) {
    return null;
  }

  // If authenticated, render children
  if (isAuthenticated) {
    return <>{children}</>;
  }

  // Otherwise, show nothing while redirecting
  return null;
}
