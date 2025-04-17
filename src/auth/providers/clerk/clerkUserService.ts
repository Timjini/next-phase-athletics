import { IUserService } from '../../userService';
import { User, UserRole } from '@/lib/types/user';
import { auth } from '@clerk/nextjs/server';
import { createClerkClient } from '@clerk/backend';
import type { User as ClerkUser } from '@clerk/backend';


const clerkClient = createClerkClient({ secretKey: process.env.CLERK_SECRET_KEY || '' });

export class ClerkUserService implements IUserService {
  async getCurrentUser(): Promise<User | null> {
    const { userId } = await auth();
    if (!userId) return null;

    const clerkUser = await clerkClient.users.getUser(userId);
    return this.transformClerkUser(clerkUser);
  }

  async getUserById(userId: string): Promise<User | null> {
    try {
      const clerkUser = await clerkClient.users.getUser(userId);
      return this.transformClerkUser(clerkUser);
    } catch {
      return null;
    }
  }

  async updateUserRole(userId: string, role: UserRole): Promise<User> {
    const updatedUser = await clerkClient.users.updateUser(userId, {
      publicMetadata: { role }
    });
    return this.transformClerkUser(updatedUser);
  }

  private transformClerkUser(clerkUser: ClerkUser): User {
    return {
      id: clerkUser.id,
      email: clerkUser.emailAddresses[0]?.emailAddress || '',
      role: (clerkUser.publicMetadata?.role as UserRole) || 'user',
    };
  }
}
