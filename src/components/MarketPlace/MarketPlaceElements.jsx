import styled from "styled-components";

export const MainContainer = styled.div`
  width: 80%;
  margin: auto;
  border: 1px solid #fff;
  height: 80vh;
`;

export const Menu = styled.div`
  display: flex;
  width: 100%;
  height: 10vh;
  border: 1px solid #fff;

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

export const LinkComponent = styled.div`
  border: 1px solid #fff;
  background-color: #1e2258;
`;
