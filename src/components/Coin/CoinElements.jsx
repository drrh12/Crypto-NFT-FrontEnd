import styled from "styled-components";

export const CoinContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 6vh;
  margin: auto;
  border-bottom: 1px solid white;
  color: #000;
`;

export const CoinRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  height: 3vh;
  /* border: 1px solid #fff; */
  /* border-bottom: 1px solid #d7d7d7; */
  /* width: 30%; */
  margin: auto;
`;

export const Coins = styled.div`
  display: flex;
  align-items: center;
  /* padding-right: 24px; */
  min-width: 300px;

  h1 {
    font-size: 16px;
    width: 150px;
  }

  img {
    height: 30px;
    width: 30px;
    margin-right: 10px;
  }

  p {
    text-transform: uppercase;
  }
`;

export const CoinData = styled.div`
  display: flex;
  text-align: right;
  justify-content: space-between;
  width: 100%;

  .coin-percent {
    width: 30%;
    margin: auto;
  }

  .red {
    color: #f00606;
  }

  .green {
    color: #11d811;
  }
`;

export const CoinPrice = styled.div`
  width: 15%;
  /* border: 1px solid white; */
  margin: auto;
  p {
    float: left;
  }
`;

export const CoinVolume = styled.div`
  width: 30%;
  margin: auto;
  /* border: 1px solid #fff; */

  p {
    float: left;
  }
`;
