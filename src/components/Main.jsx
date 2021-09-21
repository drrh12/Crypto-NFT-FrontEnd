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
import styled from "styled-components";

// const Menu = styled(Link)`
//   display: flex;
//   width: 80%;
//   margin: auto;
//   height: 10vh;
//   color: #fff;
//   border: 1px solid white;
//   align-items: center;

//   $(Link) {
//     text-decoration: none;

//     &:focus,
//     &:hover,
//     &:visited,
//     &:link,
//     &:active {
//       text-decoration: none;
//     }
//   }
// `;

function Main() {
  return (
    <>
      <Router>
        <MainComponent>
          <Menu>
            <NavLink className="nav-link" to="/crypto">
              Crypto
            </NavLink>
            <NavLink className="nav-link" to="/marketplace">
              Market Place
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
