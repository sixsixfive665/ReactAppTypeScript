import React from 'react';
import { Button } from 'antd'
import Lockr from 'lockr/index'

const Login: React.FC = (props: any) => {
  const handleLogin = (): void => {
    Lockr.set('token', 'abcd')
    props.history.push('/index')
  }

  // React.useEffect(() => {
  //   console.log(store.getState())
  // },[])

  return (
    <div>
      登录页！
      <br />
      <Button type="primary" onClick={handleLogin}>一键登录</Button>
    </div>
  );
};

export default Login;