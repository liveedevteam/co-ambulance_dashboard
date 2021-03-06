import React, { Component, Suspense } from 'react';
import {
  Route,
  Switch,
  withRouter,
} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import 'bootstrap/dist/js/bootstrap.min.js'
import Loading from './containers/pages/Loading';
import PrivateRoute from './components/PrivateRoute';
import CheckInHome from './containers/pages/checkIn/CheckInHome';
import CheckInPrivateRoute from './components/CheckInPrivateRoute';
import CheckInDashboard from './containers/pages/checkIn/CheckInDashboard';

const Home = React.lazy(() => import("./containers/pages/Home"))
const Dashboard = React.lazy(() => import("./containers/pages/Dashboard"))
const HomeDashboard = React.lazy(() => import("./containers/pages/susco/HomeDashboard"))

class App extends Component {
  render() {
    return (
      <div>
        {process.env.REACT_APP_ENV === 'local' && <Suspense fallback={<Loading />}>
          <Switch>
            <Route
              exact path='/'
              component={Home}
            />
            <PrivateRoute
              exact path='/dashboard'
              component={Dashboard}
            />
            <Route
              exact path='/susco/dashboard'
              component={HomeDashboard}
            />
            <Route
              exact path='/check-in/login'
              component={CheckInHome}
            />
            <CheckInPrivateRoute
              exact path='/check-in/dashboard'
              component={CheckInDashboard}
            />
          </Switch>
        </Suspense>}
        {process.env.REACT_APP_ENV === 'sit' && <Suspense fallback={<Loading />}>
          <Switch>
            <Route
              exact path='/'
              component={CheckInHome}
            />
            <CheckInPrivateRoute
              exact path='/check-in/dashboard'
              component={CheckInDashboard}
            />
          </Switch>
        </Suspense>}
        {process.env.REACT_APP_ENV === 'prod' && <Suspense fallback={<Loading />}>
          <Switch>
            <Route
              exact path='/'
              component={Home}
            />
            <Route
              exact path='/dashboard'
              component={Dashboard}
            />
            <Route
              exact path='/susco/dashboard'
              component={HomeDashboard}
            />
          </Switch>
        </Suspense>}
        {process.env.REACT_APP_ENV === 'uat' && <Suspense fallback={<Loading />}>
          <Switch>
            <Route
              exact path='/'
              component={HomeDashboard}
            />
          </Switch>
        </Suspense>}
        {process.env.REACT_APP_ENV === 'prod' && <Suspense fallback={<Loading />}>
          <Switch>
            <Route
              exact path='/'
              component={Home}
            />
            <Route
              exact path='/dashboard'
              component={Dashboard}
            />
            <Route
              exact path='/susco/dashboard'
              component={HomeDashboard}
            />
          </Switch>
        </Suspense>}
      </div>
    );
  }
}

export default withRouter(App);