import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

// import AuthOrApp from './AuthOrApp';
import Dashboard from '../Dashboard/Dashboard';
// import Dashboard from '../Dashboard2/Dashboard2';
import BillingCycle from '../billingCycle/BillingCycle';

const Routes = props => (
    // <Router history={hashHistory}>
    //     <Route path="/" component={AuthOrApp}>
    //         <IndexRoute component={Dashboard} />
    //         <Route path="billingcycles" component={BillingCycle} />
    //     </Route>
    //     <Redirect from="*" to="/" />
    // </Router>
    <div className="content-wrapper">
        <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/billingcycles" component={BillingCycle} />
            <Redirect from="*" to="/" />
        </Switch>
    </div>
)

export default Routes;