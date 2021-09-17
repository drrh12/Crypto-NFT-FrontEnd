import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Menu, MainContainer } from "./MarketPlaceElements";

import HomeNFT from "../MarketPlace/HomeNFT/HomeNFT";

function MarketPlace() {
  return (
    <MainContainer>
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
        <Route />
        <Route />
      </Switch>
      <HomeNFT></HomeNFT>
    </MainContainer>
  );
}

export default MarketPlace;
