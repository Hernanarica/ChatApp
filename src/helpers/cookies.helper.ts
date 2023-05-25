import Cookies from 'js-cookie';
import { User } from '../models';

export const setCookie = (name: string, value: string): void => {
  Cookies.set(name, value, { expires: 7 });
};

export const getCookie = (name: string): User => {
  const credentials = Cookies.get(name);
  return credentials ? JSON.parse(credentials) : null;
};

export const deleteCookie = (name: string): void => {
  Cookies.remove(name);
};