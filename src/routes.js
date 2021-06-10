import React, { Fragment } from 'react';
import { Route, Router, Switch } from 'react-router-dom';

import { history } from './helpers';

import HomePage from './pages/home';
import About from './pages/about';

const Routes = (props) => {
    return (
        <Router history={history} >
            <Fragment>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path='/about' component={About} />
                </Switch>
            </Fragment>
        </Router>
    )
}

export default Routes;