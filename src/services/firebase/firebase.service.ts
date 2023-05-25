import { doc, setDoc } from 'firebase/firestore';
import { signInWithPopup, signOut } from 'firebase/auth';
import { auth, authProvider, db } from '../../config';
import { User } from '../../models';

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

