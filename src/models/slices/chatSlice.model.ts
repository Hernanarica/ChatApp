import { Chat } from '../chat';
import { User } from '../user';

export interface ChatSlice {
  chats: Chat[];
  getAllChats: (userAuthUid: string | undefined) => void;
  createChat: (userAuthUid: string | undefined, userChat: User) => void;
}