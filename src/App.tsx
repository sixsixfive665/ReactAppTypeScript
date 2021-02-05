import React, { useEffect } from 'react';
import { HashRouter as Router, Switch } from 'react-router-dom';
import routes from 'router/router'
import renderRoutes from 'utils/renderRoutes'
import 'App.css';

const App: React.FC = () => {
  useEffect(() => {
    console.log('welcome to react world!')
  }, [])

  return (
    <Router>
      <div className="App">
        APP页面！
        <Switch>
          {renderRoutes(routes)}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
