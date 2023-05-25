import { User } from '../user';

export interface UserSlice {
  user: User | null,
  loadUserCredentials: (userData: User) => void,
  removeUserCredentials: (id: string) => void,
}