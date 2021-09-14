import React from "react";

import {
  CoinContainer,
  CoinRow,
  Coins,
  CoinData,
  CoinPrice,
  CoinVolume,
  CoinMarketCap,
} from "./CoinElements";

function Coin({ name, image, symbol, price, marketCap, priceChange, volume }) {
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
          <CoinVolume>market cap: ${marketCap.toLocaleString()}</CoinVolume>

          {priceChange < 0 ? (
            <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
          ) : (
            <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
          )}

          <CoinMarketCap>
            trading volume: ${volume.toLocaleString()}
          </CoinMarketCap>
        </CoinData>
      </CoinContainer>
    </>
  );
}

export default Coin;
