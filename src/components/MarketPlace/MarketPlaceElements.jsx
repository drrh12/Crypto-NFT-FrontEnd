import styled from "styled-components";

export const MainContainer = styled.div`
  width: 80%;
  margin: auto;
  height: 80vh;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 10vh;

  .nav-link {
    text-decoration: none;
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

export const LinkComponent = styled.div`
  border-radius: 5px;
  background-color: #1e2258;
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
