export interface IRoute {
  path: string;
  component: ComponentType<RouteComponentProps<any, StaticContext, any>>;
  exact?: boolean;
  key?: Key;
}
