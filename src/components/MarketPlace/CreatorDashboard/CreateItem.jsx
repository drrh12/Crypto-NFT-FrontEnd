import React, { useState } from "react";
import { ethers } from "ethers";
import { create as ipfsHttpClient } from "ipfs-http-client";
import Web3Modal from "web3modal";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { nftaddress, nftmarketaddress } from "../config";

import NFT from "../../../artifacts/contracts/NFT.sol/NFT.json";
import Market from "../../../artifacts/contracts/NFTMarket.sol";

function CreateItem() {
  return <div></div>;
}

export default CreateItem;
