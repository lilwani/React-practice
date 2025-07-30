import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../components/ErrorPage';
import Login from '../pages/auth/Login';
import Signup from '../pages/auth/Signup';
import App from '../App';
import Items from '../pages/todos/Items';
import AddItem from '../pages/todos/AddItem';

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
            element: <Items />,
            errorElement: <ErrorPage />,
          },
          {
            path: ':userId/addTodo',
            element: <AddItem />,
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
