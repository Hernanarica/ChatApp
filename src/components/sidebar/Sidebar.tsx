import {
  ArrowRightOnRectangleIcon,
  ChatBubbleBottomCenterIcon,
  Cog6ToothIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';
import { useStore } from '../../state';
import { NavLink, useNavigate } from 'react-router-dom';

export function Sidebar() {
  const user = useStore(state => state.user);
  const logout = useStore(state => state.logout);
  const resetAuthState = useStore(state => state.resetAuthState);
  const resetUsersState = useStore(state => state.resetUsersState);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();

    resetAllState();

    navigate('/', { replace: true });
  };

  const resetAllState = () => {
    resetAuthState();
    resetUsersState();
  };

  return (
    <div className="w-14 min-h-screen flex flex-col items-center justify-between py-3 bg-message-100">
      <div className="flex flex-col items-center justify-center gap-3">
        <NavLink to="contacts">
          <UserGroupIcon className="h-7"/>
        </NavLink>
        <NavLink to="chats">
          <ChatBubbleBottomCenterIcon className="h-7"/>
        </NavLink>
        <hr className="w-full text-gray-600"/>
        <NavLink to="configurations">
          <Cog6ToothIcon className="h-7"/>
        </NavLink>
      </div>
      <div className="flex flex-col items-center justify-center gap-3">
        <button onClick={ handleLogout }>
          <ArrowRightOnRectangleIcon className="h-7"/>
        </button>
        <span className="inline-block w-11 h-11 bg-blue-600 rounded-full overflow-hidden">
            <img src={ user?.photoURL } alt={ user?.displayName }/>
          </span>
      </div>
    </div>
  );
}