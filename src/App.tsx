import React from 'react';
import { Button } from 'antd';
import { HashRouter as Router } from 'react-router-dom';
import routes from 'router/router'
import renderRoutes from 'utils/renderRoutes'
import 'App.css';

const App: React.FC = () => {
  const [appTitle, setAppTitle] = React.useState<string>('123')
  React.useEffect(() => {
    console.log('welcome to react world!')
    // setAppTitle('React&&Typescript')
  }, [])

  return (
    <div className="app_container">
      <Router>
        <Button type="primary">{appTitle}</Button>
        <div className="App">
          {renderRoutes(routes)}
        </div>
      </Router>
    </div>
  );
}

export default App;