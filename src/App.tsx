import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import routes from 'router/index'
import renderRoutes from 'utils/renderRoutes'
import store from 'store/index'
import { Spin } from 'antd'
import 'App.scss';

const App: React.FC = () => {

  const [globalLoadingState, setGlobalLoadingState] = React.useState<boolean>(false)

  React.useEffect(() => {
    store.subscribe(() => {
      setGlobalLoadingState(store.getState().config.globalLoading)
    })
  }, [])

  return (
    <div className="app_container">
      {globalLoadingState ? <div className="loading_modal">
        <Spin className="loading_spin" size="large" spinning={globalLoadingState === true} delay={0} />
      </div> : ''}
      <Router>
        <div className="App">
          {renderRoutes(routes)}
        </div>
      </Router>
    </div>
  );
}

export default App;