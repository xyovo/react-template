import { Navigate, createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Layout from '../layout';
import User from '../pages/User';

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
