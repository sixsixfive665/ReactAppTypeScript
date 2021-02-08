import {
  Route, Switch, Redirect
} from 'react-router-dom';
import { RouteInterface } from 'assets/interface';
import Lockr from 'lockr'

const renderRoutes = (routes: Array<any>): any => {
  const token = Lockr.get('token')
  const whiteList = ['/login', '/exception404']
  return (
    <Switch>
      {
        routes.map((route: RouteInterface, index: number) => {
          // 判断重定向
          if (!route.redirect) {
            // 判断免登录白名单路由
            if (whiteList.includes(route.path) || token) {
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
                  render={props => (
                    <Redirect to={'/login'} />
                  )}
                />
              )
            }
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

