import { Suspense, ComponentType, Key } from 'react';
import { StaticContext } from 'react-router';
import { MemoryRouter as Router, Switch, Route, RouteComponentProps } from 'react-router-dom';
import Loader from './common/Loader';
import {Routes} from './routes/';
import {IRoute} from "./interface/"
import { Box } from '@mui/material';

export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Box
      sx={{ width:'700px',mx:'auto'}}>
      <Router>
        <Switch>
          {Routes?.map((route: IRoute, index: any) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          ))}
        </Switch>
      </Router>
      </Box>
    </Suspense>
  );
}
