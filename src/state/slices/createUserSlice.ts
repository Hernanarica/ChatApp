import { StateCreator } from 'zustand';
import { UserSlice } from '../../models';

export const createUserSlice: StateCreator<UserSlice> = (set) => ({
  user: null,
  loadUserCredentials: (userData) => set(() => ({ user: userData })),
  removeUserCredentials: () => set(() => ({ user: null })),
});