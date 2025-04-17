import { IAuthProvider } from './providers/authProvider';
import { ClerkAuthProvider } from './providers/clerk/clerkProvider';
import { ClerkUserService } from './providers/clerk/clerkUserService';
import { IUserService } from './userService';

// Export interfaces
export type { IAuthProvider, IUserService };

// Current implementations (can be swapped)
export const authProvider: IAuthProvider = new ClerkAuthProvider();
export const userService: IUserService = new ClerkUserService();