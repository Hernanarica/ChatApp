import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { PrivateLayout } from '../layouts';
import { Chats } from '../components';
import { Contacts, NotFound } from '../pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PrivateLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Chats />,
      },
      {
        path: 'contacts',
        element: <Contacts />,
      },
      {
        path: 'chats',
        element: <Chats />,
      },
      {
        path: 'configurations',
        element: <h2>Configuración</h2>,
      },
    ]
  }
]);

export function PrivateRouter() {
  return <RouterProvider router={ router }/>;
}