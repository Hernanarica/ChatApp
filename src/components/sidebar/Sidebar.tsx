import { ArrowRightOnRectangleIcon, ChatBubbleBottomCenterIcon, Cog6ToothIcon } from '@heroicons/react/24/outline';
import { useStore } from '../../state';

export function Sidebar() {
  const user = useStore(state => state.user);
  const logout = useStore(state => state.logout);

  return (
    <div className="w-14 min-h-screen flex flex-col items-center justify-between py-3 bg-message-100">
      <div className="flex flex-col items-center justify-center gap-3">
        <button>
          <ChatBubbleBottomCenterIcon className="h-7" />
        </button>
        <hr className="w-full text-gray-600" />
        <button>
          <Cog6ToothIcon className="h-7" />
        </button>
      </div>
      <div className="flex flex-col items-center justify-center gap-3">
        <button onClick={ logout }>
          <ArrowRightOnRectangleIcon className="h-7" />
        </button>
        <span className="inline-block w-11 h-11 bg-blue-600 rounded-full overflow-hidden">
            <img src={ user?.photoURL } alt={ user?.displayName} />
          </span>
      </div>
    </div>
  );
}