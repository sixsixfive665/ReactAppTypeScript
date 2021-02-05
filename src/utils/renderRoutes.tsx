import {
  Route
} from 'react-router-dom';
import { RouteInterface } from 'assets/interface';

const renderRoutes = (routes: Array<any>): any => {
  return routes.map((route: RouteInterface, index: number) => {
    return (
      <Route
        key={index}
        path={route.path}
        render={props => (
          <route.component {...props} routes={route.routes} />
        )}
      />
    );
  })
}

export default renderRoutes

