import React, {
  useState,
  useParams,
  useLocation,
  useHistory,
  useRouteMatch,
} from "react";
import { ethers } from "ethers";
import { create as ipfsHttpClient } from "ipfs-http-client";
import Web3Modal from "web3modal";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { nftaddress, nftmarketaddress } from "../config";

import NFT from "../../../artifacts/contracts/NFT.sol/NFT.json";
import Market from "../../../artifacts/contracts/NFTMarket.sol";

function CreateItem() {
  const [fileUrl, setFileUrl] = useState(null);
  const [formInput, updateFormInput] = useState({
    price: "",
    name: "",
    description: "",
  });
  const router = useRouter();

  async function onChange(e) {
    const file = e.target.files[0];
    try {
      const added = await client.add(file, {
        progress: (prog) => console.log(`received: ${prog}`),
      });
      const url = `https://ipfs.infura.io/ipfs/${added.path}`;
      setFileUrl(url);
    } catch (e) {
      console.log(e);
    }
  }

  return <div></div>;
}

export default CreateItem;
