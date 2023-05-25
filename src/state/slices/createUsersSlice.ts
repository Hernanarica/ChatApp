import { StateCreator } from 'zustand';
import { collection, getDocs } from 'firebase/firestore';
import { User, UsersSlice } from '../../models';
import { db } from '../../config';

export const createUsersSlice: StateCreator<UsersSlice> = (set) => ({
  users: [],
  getAllUsers: async () => {
    const querySnapshot = await getDocs(collection(db, 'users'));
    const usersData: User[] = querySnapshot.docs.map((doc) => (<User>doc.data()));

    set(() => ({ users: usersData }));
  }
});
