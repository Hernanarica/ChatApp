import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { createAuthSlice, createUsersSlice } from '../slices';
import { AuthSlice, ChatSlice, UsersSlice } from '../../models';
import { createChatsSlice } from '../slices/createChatsSlice.ts';

export const useStore = create<UsersSlice & AuthSlice & ChatSlice>()(devtools((...a) => ({
  ...createUsersSlice(...a),
  ...createAuthSlice(...a),
  ...createChatsSlice(...a),
})));