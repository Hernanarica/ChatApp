import { useStore } from '../../state';
import GoogleLogo from '../../assets/imgs/google-logo.svg';
import Messages from '../../assets/imgs/messages.jpg';

export function Home() {
  const login = useStore((state) => state.login);

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-message-900 lg:h-screen lg:overflow-hidden">
        <div className="hidden lg:flex lg:items-center lg:justify-center lg:w-4/6">
          <img src={ Messages } alt="Messages image"/>
        </div>
        <div className="text-center lg:w-2/6">
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