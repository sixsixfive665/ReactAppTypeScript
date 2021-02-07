import React from 'react';
import { Button } from 'antd'

const Index: React.FC = () => {
  const [initData, setInitData] = React.useState<string>('初始值！')
  React.useEffect(() => {
    setInitData('变更值！')
  }, [])
  return (
    <div>
      首页！
      <Button type="primary">{initData}</Button>
    </div>
  );
};

export default Index;