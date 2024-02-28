import { createBrowserRouter } from 'react-router-dom';
import Home from '../page/Home';
import Login from '../page/Login';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);
