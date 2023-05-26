import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components';

export function PrivateLayout() {
  return (
    <div className="h-screen flex">
      <Sidebar />
      <Outlet />
    </div>
  );
}