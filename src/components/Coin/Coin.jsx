import React from "react";

import {
  CoinContainer,
  CoinRow,
  Coins,
  CoinData,
  CoinPrice,
  CoinVolume,
} from "./CoinElements";

function Coin({ name, image, symbol, price, marketCap }) {
  return (
    <>
      <CoinContainer>
        <CoinRow>
          <Coins>
            <img src={image} alt="images-crypto" />
            <h1>{name}</h1>
            <p>{symbol}</p>
          </Coins>
        </CoinRow>
        <CoinData>
          <CoinPrice>${price}</CoinPrice>
          <CoinVolume>${marketCap.toLocaleString()}</CoinVolume>
        </CoinData>
      </CoinContainer>
    </>
  );
}

export default Coin;
