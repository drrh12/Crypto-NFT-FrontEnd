import styled from "styled-components";

export const MainComponent = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #1e2258;
`;

export const Menu = styled.div`
  display: flex;
  width: 80%;
  margin: auto;
  height: 10vh;
  color: #fff;
  border: 1px solid white;
  align-items: center;

  .nav-link {
    text-decoration: none;

    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
      text-decoration: none;
    }
  }

  /* .nav-link:link,
  .nav-link:visited,
  .nav-link:hover {
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
  } */
`;

export const HyperLink = styled.a``;
