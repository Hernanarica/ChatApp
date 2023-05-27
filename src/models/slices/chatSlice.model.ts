import { Chat } from '../chat';

export interface ChatSlice {
  chats: Chat[];
  getAllChats: (userAuthUid: string | undefined) => void;
  createChat: (userAuthUid: string | undefined, userChat: Chat) => void;
  deleteChat: (userAuthUid: string, userChatUid: string) => void;
}