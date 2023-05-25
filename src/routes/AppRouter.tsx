import { PrivateRouter } from './PrivateRouter.tsx';
import { PublicRouter } from './PublicRouter.tsx';
import { useStore } from '../state';

export function AppRouter() {
  const user = useStore(state => state.user);

  if (user) {
    return <PrivateRouter/>;
  }

  return <PublicRouter/>;
}