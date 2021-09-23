import React from "react";

import {
  MainComponent,
  Image,
  Title,
  Description,
  Price,
} from "./CardElements";

function Card(props) {
  return (
    <>
      <MainComponent>
        <Image>{props.image}</Image>
        <Title>{props.name}</Title>
        <Description>{props.description}</Description>
        <Price>{props.price}</Price>
      </MainComponent>
    </>
  );
}

export default Card;
