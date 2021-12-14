import { Suspense} from 'react';
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import Loader from './common/Loader';
import {Routes} from './routes/';
import {IRoute} from "./interface/"
import { Container } from '@mui/material';
import { ToastContainer } from 'react-toastify';

export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Container sx={{ width: '700px', mx: 'auto' }}>
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
        <ToastContainer />
      </Container>
    </Suspense>
  );
}
