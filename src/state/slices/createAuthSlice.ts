import { StateCreator } from 'zustand';
import { deleteCookie, getCookie, setCookie } from '../../helpers';
import { loginGoogle, logoutGoogle } from '../../services';
import { AuthSlice, User } from '../../models';

interface State {
  user: null;
}

const initialState: State = {
  user: null
};

export const createAuthSlice: StateCreator<AuthSlice> = (set) => ({
  user: getCookie('credentials') ?? null,
  login: async () => {
    const userData: User = await loginGoogle();

    setCookie('credentials', JSON.stringify(userData));

    set(() => ({ user: userData }));
  },
  logout: async () => {
    await logoutGoogle();

    deleteCookie('credentials');

    set(() => ({ user: null }));
  },
  reset: () => {
    set(initialState);
  }
});