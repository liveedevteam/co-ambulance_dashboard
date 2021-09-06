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

const Home = React.lazy(() => import("./containers/pages/Home"))
const Dashboard = React.lazy(() => import("./containers/pages/Dashboard"))

class App extends Component {
  render() {
    return (
      <div>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route
              exact path='/'
              component={Home}
            />
            <Route
              exact path='/dashboard'
              component={Dashboard}
            />
          </Switch>
        </Suspense>
      </div>
    );
  }
}

export default withRouter(App);