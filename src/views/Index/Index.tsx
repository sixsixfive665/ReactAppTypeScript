import React from 'react';
import { Button } from 'antd'
import Lockr from 'lockr/index'

const Index: React.FC = (props: any) => {
  const [initData, setInitData] = React.useState<string>('初始值！')

  const handleLogout = () => {
    Lockr.rm('token')
    props.history.push('/login')
  }

  React.useEffect(() => {
    setInitData('注销呀！')
  }, [])
  return (
    <div>
      首页！
      <Button type="primary" onClick={handleLogout}>{initData}</Button>
    </div>
  );
};

export default Index;