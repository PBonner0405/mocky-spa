import React, { Fragment } from 'react';
import { Route, Router, Switch } from 'react-router-dom';

import { history } from './helpers';

import HomePage from './pages/home';

const Routes = (props) => {
    return (
        <Router history={history} >
            <Fragment>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                </Switch>
            </Fragment>
        </Router>
    )
}

export default Routes;