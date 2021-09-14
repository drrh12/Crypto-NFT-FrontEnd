import React, { useState, useEffect } from "react";
import { Search, SearchTitle, SearchForm, SearchInput } from "./ChartElements";

import axios from "axios";
import Coin from "../Coin/Coin";

function Chart() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Search>
        <SearchForm>
          <SearchTitle>Search a crypto currency</SearchTitle>
          <SearchForm action="">
            <SearchInput
              type="text"
              placeholder="Search"
              onChange={handleChange}
            ></SearchInput>
          </SearchForm>
        </SearchForm>
        {filteredCoins.map((coin) => {
          return (
            <Coin
              key={coin.id}
              name={coin.name}
              image={coin.image}
              symbol={coin.symbol}
              marketCap={coin.market_cap}
              price={coin.current_price}
              priceChange={coin.price_change_percentage_24h}
            />
          );
        })}
      </Search>
    </>
  );
}

export default Chart;
