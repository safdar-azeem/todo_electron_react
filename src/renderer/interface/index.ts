import { ComponentType, Key } from "react";
import { RouteComponentProps, StaticContext } from "react-router";

export interface IRoute {
  path: string;
  component: ComponentType<RouteComponentProps<any, StaticContext, any>>;
  exact?: boolean;
  key?: Key;
}

export interface IRoutes {
  map(arg0: (route: IRoute, index: any) => JSX.Element): import("react").ReactNode;
  path: string;
  exact?: boolean;
  component: any;
  title: string;
}
