import styled from "styled-components";

export const MainComponent = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #0a0a45;
`;

export const Menu = styled.div`
  display: flex;
  width: 80%;
  margin: auto;
  height: 10vh;
  color: #fff;
  align-items: center;
  font-size: 2rem;

  .nav-link {
    text-decoration: none;
  }

  .nav-link:last-child {
    margin-left: 1rem;
  }

  .nav-link:link,
  .nav-link:visited,
  .nav-link:hover {
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
  }
`;

export const HyperLink = styled.a``;
