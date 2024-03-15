import { Navigate, createBrowserRouter } from 'react-router-dom';
import Home from '../page/Home';
import Login from '../page/Login';
import NotFound from '../page/NotFound';
import Layout from '../layout';
import User from '../page/User';

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    element: <Layout />,
    children: [
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/user',
        element: <User />,
      },
    ],
  },
  {
    path: '/',
    element: <Navigate to='/home' />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);
