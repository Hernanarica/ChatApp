import { useStore } from '../../state';
import { useEffect } from 'react';
import { ContactCard } from '../../components';

export function Contacts() {
  const getAllUsers = useStore(state => state.getAllUsers);
  const users = useStore(state => state.users);
  const userAuth = useStore(state => state.user);

  useEffect(() => {
    if (!users.length) {
      getAllUsers();
    }
  }, []);

  if (!users.length) {
    return <span>Loading..</span>;
  }

  return (
    <div className="p-3 w-full overflow-auto">
      <div className="flex gap-6 flex-wrap">
        {
          users.map(user => (userAuth?.uid !== user.uid) && <ContactCard key={ user.uid } user={ user } />)
        }
      </div>
    </div>
  );
}