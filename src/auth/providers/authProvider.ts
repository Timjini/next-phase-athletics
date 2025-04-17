import { User, UserAuthInfo } from '@/lib/types/user';

export interface IAuthProvider {
  getCurrentUser(): Promise<User | null>;
  getUserAuthInfo(): Promise<UserAuthInfo>;
  signIn(redirectUrl?: string): Promise<void>;
  signOut(redirectUrl?: string): Promise<void>;
  signUp(redirectUrl?: string): Promise<void>;
  isAuthenticated(): Promise<boolean>;
  handleAuthRedirect(): Promise<void>;
}