import SelectConversation from '../../assets/imgs/select-conversation.png';

export function WelcomeChat() {
  return (
    <div className="w-9/12 min-h-screen p-3 flex justify-center items-center">
      <div>
        <img
          src={ SelectConversation }
          alt="Select conversation"
          width="230"
          className="m-0"
        />
        <p>Select a conversation or start a new one</p>
      </div>
    </div>
  );
}