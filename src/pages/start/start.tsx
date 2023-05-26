import { Chat, Chats, Sidebar } from '../../components';

export function Start() {
  return (
    <div className="h-screen flex">
      <Sidebar />
      <Chats />
      <Chat />
    </div>
  );
}