import { useStore } from '../../state';

export function Start() {
  const logout = useStore(state => state.logout);

  return (
    <>
      <button className="px-2 py-1 text-white bg-red-500 rounded" onClick={ logout }>Logout</button>
    </>
  );
}