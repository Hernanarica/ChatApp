import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { createAuthSlice, createUsersSlice } from '../slices';
import { AuthSlice, UsersSlice } from '../../models';

export const useStore = create<UsersSlice & AuthSlice>()(devtools((...a) => ({
  ...createUsersSlice(...a),
  ...createAuthSlice(...a),
})));