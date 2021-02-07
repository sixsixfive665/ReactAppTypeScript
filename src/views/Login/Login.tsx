import React from 'react';
import { Button } from 'antd'
import Lockr from 'lockr/index'
import store from 'store/index'

const Login: React.FC = (props: any) => {
  const handleLogin = (): void => {
    Lockr.set('token', 'abcd')
    store.dispatch({
      type: 'UpdateConfig',
      payload: {
        globalLoading: true
      }
    })
    setTimeout(() => {
      props.history.push('/index')
      store.dispatch({
        type: 'UpdateConfig',
        payload: {
          globalLoading: false
        }
      })
    }, 1500);
  }

  return (
    <div>
      登录页！
      <br />
      <Button type="primary" onClick={handleLogin}>一键登录</Button>
    </div>
  );
};

export default Login;