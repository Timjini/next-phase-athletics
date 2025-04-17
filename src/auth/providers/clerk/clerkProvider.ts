import { IAuthProvider } from '../authProvider';
import { User, UserAuthInfo, UserRole } from '@/lib/types/user';
import { auth } from '@clerk/nextjs/server';
import { createClerkClient } from '@clerk/backend';
import { redirect } from 'next/navigation';
import { RedirectToSignIn, RedirectToSignUp } from '@clerk/nextjs';
import type { User as ClerkUser } from '@clerk/backend';

const clerkClient = createClerkClient({ 
  secretKey: process.env.CLERK_SECRET_KEY || '' 
});

export class ClerkAuthProvider implements IAuthProvider {
  async getCurrentUser(): Promise<User | null> {
    const { userId } = await auth();
    if (!userId) return null;

    const clerkUser: ClerkUser = await clerkClient.users.getUser(userId);
    return {
      id: clerkUser.id,
      email: clerkUser.emailAddresses[0]?.emailAddress || '',
      role: (clerkUser.publicMetadata?.role as UserRole) || 'user',
    };
  }

  async getUserAuthInfo(): Promise<UserAuthInfo> {
    const { userId } = await auth();
    if (!userId) {
      return {
        userId: '',
        role: 'user',
        isAuthenticated: false,
      };
    }

    const user = await clerkClient.users.getUser(userId);
    const role = (user.publicMetadata?.role as UserRole) || 'user';

    return {
      userId,
      role,
      isAuthenticated: true,
    };
  }

  async signIn(redirectUrl: string = '/'): Promise<void> {
    RedirectToSignIn({ afterSignInUrl: redirectUrl });
  }

  async signOut(): Promise<void> {
    redirect('/sign-in');
  }

  async signUp(redirectUrl: string = '/'): Promise<void> {
    RedirectToSignUp({ afterSignUpUrl: redirectUrl });
  }

  async isAuthenticated(): Promise<boolean> {
    const { userId } = await auth();
    return !!userId;
  }

  async handleAuthRedirect(): Promise<void> {
    // Clerk handles this internally
  }
}
