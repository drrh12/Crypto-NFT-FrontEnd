import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Menu, MainContainer } from "./MarketPlaceElements";

import HomeNFT from "../MarketPlace/HomeNFT/HomeNFT";
import CreateItem from "../MarketPlace/CreatorDashboard/CreateItem";
import MyAssets from "./MyAssets/MyAssets";
import CreatorDashboard from "./CreatorDashboard/CreatorDashboard";

function MarketPlace() {
  return (
    <Router>
      <MainContainer>
        <Menu>
          <Link to="/my-assets">
            <h4>My assets</h4>
          </Link>
          <Link to="/assets">
            <h4>Sell digital assets</h4>
          </Link>
          <Link to="/creator-item">
            <h4>Create Item</h4>
          </Link>
          <Link to="/creator-dashboard">
            <h4>Creator Dashboard</h4>
          </Link>
        </Menu>
        <Switch>
          <Route path="/assets" component={HomeNFT} />
          <Route path="/my-assets" component={MyAssets} />
          <Route path="/creator-item" component={CreateItem} />
          <Route path="/creator-dashboard" component={CreatorDashboard} />
        </Switch>
      </MainContainer>
    </Router>
  );
}

export default MarketPlace;
