import { StateCreator } from 'zustand';
import { ChatSlice } from '../../models';
import { createChat, deleteChat, getAllChats } from '../../services';

export const createChatsSlice: StateCreator<ChatSlice> = (set) => ({
  chats: [],
  getAllChats: async (userAuthUid) => {
    const chatData = await getAllChats(userAuthUid);

    set(() => ({ chats: chatData }));
  },
  createChat: async (userAuthUid, userChat) => {
    await createChat(userAuthUid, userChat);

    set(state => ({
      chats: [ ...state.chats, userChat ]
    }));
  },
  deleteChat: async (userAuthUid, userChatUid) => {
    await deleteChat(userAuthUid, userChatUid);

    set(state => ({
      chats: state.chats.filter(chat => chat.uid !== userChatUid)
    }));
  }
});