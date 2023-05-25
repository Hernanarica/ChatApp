import { useEffect } from 'react';
import { signInWithPopup } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, authProvider, db } from '../../config';
import { useStore } from '../../state';
import GoogleLogo from '../../assets/imgs/google-logo.svg';

export function Home() {
  const getAllUsers = useStore((state) => state.getAllUsers);

  const login = async () => {
    const { user } = await signInWithPopup(auth, authProvider);
    const data = {
      uid: user.uid,
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      phoneNumber: user.phoneNumber,
    };
    await setDoc(doc(db, 'users', data.uid), data);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-blue-500">
        {/*<div className="hidden"></div>*/ }
        <div className="text-center">
          <button className="px-4 py-2 mx-auto flex items-center gap-3 bg-white rounded-3xl" onClick={ login }>
            <img
              src={ GoogleLogo }
              alt="Google Logo"
              width="30"
            />
            <span className="font-medium">Continuar con Google</span>
          </button>
        </div>
      </div>
    </>
  );
}