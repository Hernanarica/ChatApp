import { collection, doc, getDocs, setDoc, deleteDoc } from 'firebase/firestore';
import { signInWithPopup, signOut } from 'firebase/auth';
import { auth, authProvider, db } from '../../config';
import { Chat, User } from '../../models';

export async function loginGoogle(): Promise<User> {
  try {
    const { user } = await signInWithPopup(auth, authProvider);
    const userData: User = {
      uid: user.uid,
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      phoneNumber: user.phoneNumber,
    };
    await setDoc(doc(db, 'users', userData.uid), userData);

    return userData;
  } catch (err) {
    throw new Error(`${ err }`);
  }
}

export async function logoutGoogle(): Promise<void> {
  try {
    await signOut(auth);
  } catch (err) {
    throw new Error(`${ err }`);
  }
}

export async function getAllChats(userAuthUid: string | undefined): Promise<Chat[]> {
  try {
    const querySnapshot = await getDocs(collection(db, `chats/${ userAuthUid }/chats`));
    return querySnapshot.docs.map((doc) => (<Chat>doc.data()));
  } catch (err) {
    throw new Error(`${ err }`);
  }
}

export async function createChat(userAuthUid: string | undefined, userChat: Chat): Promise<void> {
  try {
    await setDoc(doc(db, `chats/${ userAuthUid }/`, `chats/${ userChat.uid }`), {
      uid: userChat.uid,
      displayName: userChat.displayName,
      photoURL: userChat.photoURL,
      lastMessage: 'Last Message'
    });
  } catch (err) {
    throw new Error(`${ err }`);
  }
}

export async function deleteChat(userAuthUid: string | undefined, userChatUid: string): Promise<void> {
  try {
    await deleteDoc(doc(db, `chats/${ userAuthUid }/`, `chats/${ userChatUid }`));
  } catch (err) {
    throw new Error(`${ err }`);
  }
}