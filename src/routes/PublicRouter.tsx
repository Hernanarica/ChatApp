import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { PublicLayout } from '../layouts';
import { Home } from '../pages';

const router = createBrowserRouter([
  {
    element: <PublicLayout/>,
    children: [
      {
        index: true,
        element: <Home/>,
      }
    ]
  }
]);

export function PublicRouter() {
  return <RouterProvider router={ router }/>;
}