import { Navigate } from 'react-router-dom';

export default function Auth() {
  const isLogin = true;
  if (isLogin) {
    return <Navigate to='/home' />;
  } else {
    return <Navigate to='/login' />;
  }
}
