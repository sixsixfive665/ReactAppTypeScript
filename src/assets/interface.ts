interface routeInterface {
  path: string;
  component?: any;
  redirect?: string;
  routes?: Array<any>;
}

export type RouteInterface = routeInterface;