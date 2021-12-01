import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import { LinkComponent, Menu, MainContainer } from "./MarketPlaceElements";

import HomeNFT from "../MarketPlace/HomeNFT/HomeNFT";
import Album from "../MarketPlace/HomeNFT/Album"
import CreateItem from "../MarketPlace/CreatorDashboard/CreateItem";
import MyAssets from "./MyAssets/MyAssets";
import CreatorDashboard from "./CreatorDashboard/CreatorDashboard";

function MarketPlace() {
  return (
    <Router>
      <MainContainer>
        <Menu>
          <LinkComponent>
            <NavLink className="nav-link" to="/my-assets">
              <h4>My assets</h4>
            </NavLink>
          </LinkComponent>
          <LinkComponent>
            <NavLink className="nav-link" to="/assets">
              <h4>Assets</h4>
            </NavLink>
          </LinkComponent>
          <LinkComponent>
            <NavLink className="nav-link" to="/creator-item">
              <h4>Create Item</h4>
            </NavLink>
          </LinkComponent>
          <LinkComponent>
            <NavLink className="nav-link" to="/creator-dashboard">
              <h4>Creator Dashboard</h4>
            </NavLink>
          </LinkComponent>
        </Menu>
        <Switch>
          <Route path="/assets" component={Album} />
          <Route path="/my-assets" component={MyAssets} />
          <Route path="/creator-item" component={CreateItem} />
          <Route path="/creator-dashboard" component={CreatorDashboard} />
        </Switch>
      </MainContainer>
    </Router>
  );
}

export default MarketPlace;
