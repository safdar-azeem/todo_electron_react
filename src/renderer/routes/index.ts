import {lazy} from 'react';
import { IRoutes } from 'renderer/interface';
import { HOME, EDIT_CONTACT, ADD_CONTACT } from './paths';

export const Routes: IRoutes = [
  {
    path: EDIT_CONTACT,
    exact: true,
    component: lazy(() => import('../pages/EditContact')),
    title: 'Edit Contact',
  },
  {
    path: ADD_CONTACT,
    exact: true,
    component: lazy(() => import('../pages/AddContact')),
    title: 'Add Contact',
  },
  {
    path: HOME,
    exact: true,
    component: lazy(() => import('../pages/Home')),
    title: 'Home',
  },
];
