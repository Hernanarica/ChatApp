import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { PrivateLayout } from '../layouts';
import { Start } from '../pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PrivateLayout/>,
    children: [
      {
        index: true,
        element: <Start/>,
      }
    ]
  }
]);

export function PrivateRouter() {
  return <RouterProvider router={ router }/>;
}