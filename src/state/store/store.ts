import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { createUserSlice, createUsersSlice } from '../slices';
import { UserSlice, UsersSlice } from '../../models';

export const useStore = create<UsersSlice & UserSlice>()(devtools((...a) => ({
  ...createUsersSlice(...a),
  ...createUserSlice(...a),
})));