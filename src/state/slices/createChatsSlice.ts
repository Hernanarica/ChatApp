import { StateCreator } from 'zustand';
import { ChatSlice } from '../../models';
import { createChat, getAllChats } from '../../services';

export const createChatsSlice: StateCreator<ChatSlice> = (set) => ({
  chats: [],
  getAllChats: async (userAuthUid) => {
    const chatData = await getAllChats(userAuthUid);

    set(() => ({ chats: chatData }));
  },
  createChat: async (userAuthUid, userChat) => {
    await createChat(userAuthUid, userChat);
  }
});