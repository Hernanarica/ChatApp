import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';
import { User } from '../../models';
import { useStore } from '../../state';

interface Props {
  user: User;
}

export function ContactCard({ user }: Props) {
  const userAuth = useStore(state => state.user);
  const chats = useStore(state => state.chats);
  const createChat = useStore(state => state.createChat);

  const handleOpenChat = async (user: User) => {
    const userExist = chats.some(chat => chat.chatInfo.uid === user.uid);

    if (userExist) return;

    console.log(`Opening chat with: ${ user.uid }`);

    createChat(userAuth?.uid, user);

    console.log('chat creado!');
  };

  return (
    <div
      key={ user.uid }
      className="flex flex-col gap-2 items-center p-3 w-fit rounded-3xl"
      onClick={ () => handleOpenChat(user) }
    >
      <span className="block w-10 h-10 bg-green-600 rounded-full overflow-hidden">
        <img src={ user.photoURL ?? "" } alt={ user.displayName ?? "" }/>
      </span>
      <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{ user.displayName }</h3>
      <button>
        <ChatBubbleLeftRightIcon className="h-5 text-gray-400 hover:text-gray-500"/>
      </button>
    </div>
  );
}