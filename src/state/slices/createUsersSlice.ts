import { StateCreator } from 'zustand';
import { collection, getDocs } from 'firebase/firestore';
import { User, UsersSlice } from '../../models';
import { db } from '../../config';

interface State {
  users: [];
}

const initialState: State = {
  users: []
};

export const createUsersSlice: StateCreator<UsersSlice> = (set) => ({
  users: [],
  getAllUsers: async () => {
    const querySnapshot = await getDocs(collection(db, 'users'));
    const usersData: User[] = querySnapshot.docs.map((doc) => (<User>doc.data()));

    set(() => ({ users: usersData }));
  },
  resetUsersState: () => {
    set(initialState);
  }
});
