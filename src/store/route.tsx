import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../components/ErrorPage';
import Login from '../pages/auth/Login';
import App from '../App';
import Items from '../pages/todos/Items';
import AddItem from '../pages/todos/AddItem';
import ViewItem from '../pages/todos/ViewItem';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'user',
        children: [
          {
            index: true,
            path: 'login',
            element: <Login isSignup={false} />,
            errorElement: <ErrorPage />,
          },
          {
            index: true,
            path: 'signup',
            element: <Login isSignup={true} />,
            errorElement: <ErrorPage />,
          },
          {
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
            element: <ViewItem />,
            errorElement: <ErrorPage />,
          },
        ],
      },
    ],
  },
]);

export default router;
export type RouteType = typeof router;
