import {lazy} from 'react';
import {HOME} from "./types";

export const Routes: Routes = [
  {
    path: HOME,
    component: lazy(() => import('../pages/Home')),
    data: { title: 'Home' },
  },
];
