import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Menu, MainContainer } from "./MarketPlaceElements";
import axios from "axios";
import Web3Modal from "web3modal";

import { nftaddress, nftmarketaddress } from "./config";

import NFT from "../../../artifacts/contracts/NFT.sol/NFT.json";
import Market from "../../../artifacts/contracts/NFTMarket.sol/NFTMarket.json";
import { ethers } from "ethers";

function MarketPlace() {
  const [nfts, setNfts] = useState([]);
  const [loadingState, setLoadingState] = useState("not-loaded");

  useEffect(() => {
    loadNfts();
  }, []);

  async function loadNfts() {
    const provider = new ethers.providers.JsonRpcProvider();
    const tokenContract = new ethers.Contract(nftaddress, NFT.abi, provider);
    const marketContract = new ethers.Contract(
      nftmarketaddress,
      Market.abi,
      provider
    );
    const data = await marketContract.fetchMarketItems();

    const items = await Promise.all(
      data.map(async (i) => {
        const tokenUri = await tokenContract.tokenUri(i.tokenId);
        const meta = await axios.get(tokenUri);
        let price = ethers.utils.formatUnits(i.price.toString(), "ether");

        let item = {
          price,
          tokenId: i.tokenId.toNumber(),
          seller: i.seller,
          owner: i.owner,
          image: meta.data.name,
          name: meta.data.name,
          description: meta.data.description,
        };
        return item;
      })
    );

    setNfts(items);
    setLoadingState("loaded");
  }

  if (loadingState === "loaded" && !nfts.length)
    return <h4>No items in marketplace</h4>;

  async function buyNft(nft) {
    const web3modal = new Web3Modal();
    const connection = await web3modal.connect();
    const provider = new ethers.providers.Web3Modal(connection);

    const signer = provider.getSigner();
    const contract = new ethers.Contract(nftmarketaddress, Market.abi, signer);

    const price = ethers.utils.parseUnits(nft.price.toString(), "ether");

    const transaction = await contract.createMarketSale(
      nftaddress,
      nft.tokenId,
      {
        value: price,
      }
    );

    await transaction.wait();
    loadNfts();
  }

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
    </MainContainer>
  );
}

export default MarketPlace;
