import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { TrashIcon } from '@heroicons/react/24/outline';
import { useStore } from '../../state';

export function Chats() {
  const userAuth = useStore(state => state.user);
  const getAllChats = useStore(state => state.getAllChats);
  const chats = useStore(state => state.chats);
  const navigate = useNavigate();

  useEffect(() => {
    if (chats.length) return;
    getAllChats(userAuth?.uid);
  }, []);

  if (!chats.length) {
    return <span>Loading...</span>;
  }

  return (
    <div className="h-screen flex w-full">
      <div className="w-3/12 h-screen p-3 bg-message-100 overflow-hidden">
        <h2 className="text-3xl font-medium">Chats</h2>
        <hr className="w-full text-gray-600 mb-3"/>
        <div className="h-full space-y-3 overflow-y-scroll">

          {
            chats.map(chat => (
              <div
                className="relative w-[94%] flex items-center gap-3 p-3 h-20 border border-gray-200 bg-white rounded-2xl cursor-pointer"
                key={ chat.photoURL }
                onClick={ () => navigate(`users/${ chat.displayName }`) }
              >
                <div>
                  <span className="block w-10 h-10 bg-green-600 rounded-full overflow-hidden">
                    <img src={ chat.photoURL } alt={ chat.displayName }/>
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold leading-4">{ chat.displayName }</h3>
                  <span className="text-gray-500 text-xs">Last message...</span>
                </div>
                <button className="absolute bottom-3 right-3">
                  <TrashIcon className="h-5 text-gray-400 transition hover:text-red-500"/>
                </button>
              </div>
            ))
          }

        </div>
      </div>
      <Outlet/>
    </div>
  );
}