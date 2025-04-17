import { User, UserRole } from '@/lib/types/user';

export interface IUserService {
  getCurrentUser: () => Promise<User | null>;
  updateUserRole: (userId: string, role: UserRole) => Promise<User>;
  getUserById: (userId: string) => Promise<User | null>;
}
