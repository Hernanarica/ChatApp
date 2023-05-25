import { useStore } from '../../state';
import GoogleLogo from '../../assets/imgs/google-logo.svg';

export function Home() {
  const login = useStore((state) => state.login);

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