import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { PublicLayout } from '../layouts';
import { Home, NotFound } from '../pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PublicLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      }
    ]
  }
]);

export function PublicRouter() {
  return <RouterProvider router={ router }/>;
}