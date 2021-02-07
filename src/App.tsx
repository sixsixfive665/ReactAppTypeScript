import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import routes from 'router/router'
import renderRoutes from 'utils/renderRoutes'
import 'App.css';

const App: React.FC = () => {
  React.useEffect(() => {
    console.log('Welcome to react world!')
  }, [])

  return (
    <div className="app_container">
      <Router>
        <div className="App">
          {renderRoutes(routes)}
        </div>
      </Router>
    </div>
  );
}

export default App;