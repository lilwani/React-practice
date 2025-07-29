import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../components/ErrorPage';
import Login from '../pages/auth/Login';
import Signup from '../pages/auth/Signup';
import App from '../App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'auth',
        children: [
          {
            index: true,
            path: 'login',
            element: <Login />,
            errorElement: <ErrorPage />,
          },
          { path: 'signup', element: <Signup />, errorElement: <ErrorPage /> },
        ],
      },
      {
        path: 'user',
        children: [
          {
            index: true,
            path: ':userId',
            element: <Login />,
            errorElement: <ErrorPage />,
          },
          {
            path: ':userId/addTodo',
            element: <Signup />,
            errorElement: <ErrorPage />,
          },
          {
            path: ':userId/:todoId',
            element: <Signup />,
            errorElement: <ErrorPage />,
          },
        ],
      },
    ],
  },
]);

export default router;
export type RouteType = typeof router;
