import React, { useState, useEffect } from "react";
import { Search } from "./ChartElements";

import axios from "axios";

function Chart() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Search>
        <h1>Search a crypto currency</h1>
        <form action="">
          <input type="text" placeholder="Search" />
        </form>
      </Search>
    </>
  );
}

export default Chart;
