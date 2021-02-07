import {
  Route, Switch, Redirect
} from 'react-router-dom';
import { RouteInterface } from 'assets/interface';
import Lockr from 'lockr'

const renderRoutes = (routes: Array<any>): any => {
  console.log("执行渲染")
  const token = Lockr.get('token')
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

