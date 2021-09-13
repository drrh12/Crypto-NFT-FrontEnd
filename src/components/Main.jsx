import React from "react";

import { Menu, MainComponent } from "./MainElements";

import MarketPlace from "./MarketPlace/MarketPlace";
import Crypto from "./Crypto/Crypto";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Main() {
  return (
    <>
      <Router>
        <MainComponent>
          <Menu>
            <Link exact to="/crypto">
              <h3>Crypto</h3>
            </Link>
            <Link exact to="/marketplace">
              <h3>Market Place</h3>
            </Link>
          </Menu>
          <Switch>
            <Route path="/crypto" component={Crypto} />
            <Route path="/marketplace" component={MarketPlace} />
          </Switch>
        </MainComponent>
      </Router>
    </>
  );
}

export default Main;
