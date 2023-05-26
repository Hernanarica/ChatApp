import { User } from '../user';

export interface UsersSlice {
  users: User[] | [];
  getAllUsers: () => void;
  reset: () => void
}