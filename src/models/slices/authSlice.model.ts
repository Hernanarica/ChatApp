import { User } from '../user';

export interface AuthSlice {
  user: User | null,
  login: () => void,
  logout: () => void,
  resetAuthState: () => void
}