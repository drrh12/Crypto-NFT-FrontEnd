import React from "react";
import { Menu, MainComponent, HyperLink } from "./MainElements";
import MarketPlace from "./MarketPlace/MarketPlace";
import Crypto from "./Crypto/Crypto";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

function Main() {
  return (
    <>
      <Router>
        <MainComponent>
          <Menu>
            <NavLink className="nav-link" to="/crypto">
              <h4>Crypto</h4>
            </NavLink>
            <NavLink className="nav-link" to="/marketplace">
              <h4>Market Place</h4>
            </NavLink>
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
