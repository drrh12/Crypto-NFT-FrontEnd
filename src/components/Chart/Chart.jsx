import React, { useState, useEffect } from "react";

const axios = require("axios");

// https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false

function Chart() {
  useEffect(() => {
    axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    );
  }, []);

  return <div></div>;
}

export default Chart;
