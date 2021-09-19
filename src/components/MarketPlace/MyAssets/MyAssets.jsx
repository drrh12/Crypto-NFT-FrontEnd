import React from "react";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import axios from "axios";
import Web3Modal from "web3modal";

import { nftmarketaddress, nftaddress } from "../config";

import Market from "../CreatorDashboard/artifacts/contracts/NFTMarket.sol/NFTMarket.json";
import NFT from "../CreatorDashboard/artifacts/contracts/NFT.sol/NFT.json";

function MyAssets() {
  return (
    <div>
      <h1>My assets</h1>
    </div>
  );
}

export default MyAssets;
