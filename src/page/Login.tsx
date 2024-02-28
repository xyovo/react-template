import { Form, Input, Button, Typography } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

export default function Login() {
  return (
    <div className={`w-screen h-screen flex flex-col justify-center items-center`}>
      <Typography.Title level={2}>Login</Typography.Title>
      <Form className={`w-[400px] m-t-5`} size='large'>
        <Form.Item
          name='username'
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input prefix={<UserOutlined />} />
        </Form.Item>

        <Form.Item
          name='password'
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password prefix={<LockOutlined />} />
        </Form.Item>
        <Button type='primary' className={`w-full`}>
          登录
        </Button>
      </Form>
    </div>
  );
}
