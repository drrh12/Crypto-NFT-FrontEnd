import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Menu } from "./MarketPlaceElements";

function MarketPlace() {
  return (
    <div>
      <Menu>
        <Link exact to="/crypto">
          <h4>Sell digital assets</h4>
        </Link>
        <Link exact to="/marketplace">
          <h4>My assets</h4>
        </Link>
        <Link exact to="">
          <h4>Creator dashboard</h4>
        </Link>
      </Menu>
      <Switch>
        <Route path="/crypto" component={Crypto} />
        <Route path="/marketplace" component={MarketPlace} />
      </Switch>
    </div>
  );
}

export default MarketPlace;
