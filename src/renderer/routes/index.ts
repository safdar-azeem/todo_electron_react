import {lazy} from 'react';
import { HOME, EDIT_CONTACT, ADD_CONTACT } from './types';

export const Routes = [
  {
    path: EDIT_CONTACT,
    exact: true,
    component: lazy(() => import('../pages/EditContact')),
    data: { title: 'Edit' },
  },
  {
    path: ADD_CONTACT,
    exact: true,
    component: lazy(() => import('../pages/AddContact')),
    data: { title: 'Add' },
  },
  {
    path: HOME,
    exact: true,
    component: lazy(() => import('../pages/Home')),
    data: { title: 'Home' },
  },
];
