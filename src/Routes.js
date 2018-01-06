import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Donate from './components/Donate';
import NotFound from './components/404';
import DonationSuccess from './components/DonationSuccess';

class Router extends Component {
  render() {
    return (
      <div>
        { /* <3 hashrouter */ }
        <HashRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/donate" component={Donate} />
            <Route exact path="/donation/success" component={DonationSuccess} />
            <Route component={NotFound} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default Router;