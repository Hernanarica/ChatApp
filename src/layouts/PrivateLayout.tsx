import { Outlet } from 'react-router-dom';

export function PrivateLayout() {
  return (
    <>
      <h1>Private layout</h1>
      <hr/>
      < Outlet />
    </>
  );
}