interface routeInterface {
  path: string;
  component?: any;
  redirect?: string;
  routes?: Array<any>;
}

interface actionInterface {
  type: string;
  payload?: any
}

export type RouteInterface = routeInterface;
export type ActionInterface = actionInterface;