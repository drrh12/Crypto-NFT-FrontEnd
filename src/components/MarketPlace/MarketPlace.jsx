import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Menu, MainContainer } from "./MarketPlaceElements";

import HomeNFT from "../MarketPlace/HomeNFT/HomeNFT";
import CreateItemDashboard from "../MarketPlace/CreatorDashboard/CreateItem";

function MarketPlace() {
  return (
    <MainContainer>
      <Menu>
        <Link exact to="/assets">
          <h4>Sell digital assets</h4>
        </Link>
        <Link exact to="/my-assets">
          <h4>My assets</h4>
        </Link>
        <Link exact to="/creator-dashboard">
          <h4>Creator dashboard</h4>
        </Link>
      </Menu>
      <Switch>
        <Route path="/assets" component={HomeNFT} />
        <Route path="/creator-dashboard" component={CreateItemDashboard} />
      </Switch>
    </MainContainer>
  );
}

export default MarketPlace;
