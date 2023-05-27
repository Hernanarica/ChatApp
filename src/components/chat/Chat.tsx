import { useParams } from 'react-router-dom';

export function Chat() {
  const { username } = useParams();

  return (
    <div className="w-9/12 min-h-screen p-3 flex justify-center items-center">
      <h2>Name: { username }</h2>
    </div>
  );
}