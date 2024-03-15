import { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { sleep } from '../utils';

export default function Layout() {
  const [loading, setLoading] = useState(true);
  const [isLogin, setIsLogin] = useState(false);

  async function fetchUserInfo() {
    await sleep(0);
    setLoading(false);
    setIsLogin(true);
  }

  useEffect(() => {
    fetchUserInfo();
  }, []);

  if (loading) {
    return <div className={`w-screen h-screen flex justify-center items-center`}>loading...</div>;
  }

  if (!isLogin) {
    return <Navigate to='/login' />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
}
