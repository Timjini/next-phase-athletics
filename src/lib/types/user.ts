export interface User {
  id: string;
  email: string;
  role: UserRole;
}

export type UserRole = 'user' | 'admin';

export interface UserAuthInfo {
  userId: string;
  role: UserRole;
  isAuthenticated: boolean;
}