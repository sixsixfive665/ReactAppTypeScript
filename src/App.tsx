import React, { useEffect } from 'react';
import { HashRouter as Router } from 'react-router-dom';
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
        {renderRoutes(routes)}
      </div>
    </Router>
  );
}

export default App;
