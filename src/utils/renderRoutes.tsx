import {
  Route, Switch, Redirect
} from 'react-router-dom';
import { RouteInterface } from 'assets/interface';

const renderRoutes = (routes: Array<any>): any => {
  return (
    <Switch>
      {
        routes.map((route: RouteInterface, index: number) => {
          // 判断重定向
          if (!route.redirect) {
            return (
              <Route
                key={index}
                path={route.path}
                render={props => (
                  <route.component {...props} routes={route.routes} />
                )}
              />
            );
          } else {
            return (
              <Route
                key={index}
                path={route.path}
                exact
                render={props => (
                  <Redirect to={route.redirect || ''} />
                )}
              />
            )
          }
        })
      }
    </Switch>
  )

}

export default renderRoutes

