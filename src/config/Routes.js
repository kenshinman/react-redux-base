import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PageLoader } from '../components/Loaders';
import PrivateRoute from '../layouts/PrivateRoute';
import AuthRoute from '../layouts/AuthRoute';
import PublicRoute from '../layouts/PublicRoute';
import Error404 from '../components/Error404';
import { AlertWrapper } from '../components/alert/AlertComponent';

// create Loadable pages
const Home = lazy(() => import('../pages/home/Home'));
const Login = lazy(() => import('../pages/auth/Login'));
const About = lazy(() => import('../pages/about/About'));

const Routes = () => (
  // eslint-disable-next-line no-undef
  <Router basename={process.env.PUBLIC_URL}>
    <Suspense fallback={<PageLoader />}>
      <AlertWrapper ref={alertRef => (window.alertRef = alertRef)} />
      <Switch>
        {/* can't access them when you are logged in */}
        <AuthRoute exact path='/' component={Login} />
        <AuthRoute exact path='/login' component={Login} />

        {/* can only access them when you are logged in */}
        <PrivateRoute exact path='/home' component={Home} />

        {/* public route: accessible to both !!authenticated users */}
        <PublicRoute exact path='/about' component={About} />

        {/* catch all invalid urls */}
        <Route component={Error404} />
      </Switch>
    </Suspense>
  </Router>
);

export default Routes;
