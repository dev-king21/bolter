import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import asyncComponent from '../util/asyncComponent';

const Routes = ({match}) =>

  <Switch>
    <Route path={`${match.url}/sample-page`}
           component={asyncComponent(() => import('./SamplePage'))}/>
    <Route path={`/home`}component={asyncComponent(() => import('./Home'))}/>
    <Route path={`/bolter`}component={asyncComponent(() => import('./Bolter'))}/>
    <Route component={asyncComponent(() => import("routes/extraPages/routes/404"))}/>
  </Switch>;


export default withRouter(Routes);

