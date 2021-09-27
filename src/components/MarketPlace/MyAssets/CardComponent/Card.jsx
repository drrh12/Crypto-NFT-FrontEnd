import React from "react";

import {
  MainComponent,
  Image,
  Title,
  Description,
  Price,
  Button,
} from "./CardElements";

function Card(props) {
  return (
    <>
      <MainComponent>
        <Image src={props.image}></Image>
        <Title>{props.name}</Title>
        <Description>{props.description}</Description>
        <Price>{props.price}</Price>
        <Button onClick={props.function}>{props.buttonName}</Button>
      </MainComponent>
    </>
  );
}

export default Card;
