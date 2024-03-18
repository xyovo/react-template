import { useEffect, useState } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { sleep } from '../utils';
import { Spin } from 'antd';

export default function Layout() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [isLogin, setIsLogin] = useState(false);

  async function fetchUserInfo() {
    try {
      await sleep(3000);
      setLoading(true);
      setIsLogin(true);
    } catch (error) {
      navigate('/login');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchUserInfo();
  }, []);

  if (loading) {
    return (
      <div className={`w-screen h-screen flex justify-center items-center`}>
        <Spin size='large' />
      </div>
    );
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
