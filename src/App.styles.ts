import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #17181f;
    font-family: "Albert Sans", sans-serif;
  }
`;

export const Container = styled.div`
  color: rgba(116, 109, 109, 0.973);
`;

export const Area = styled.div`
  margin: auto;
  max-width: 750px;
  padding: 10px;
  text-align: center;
`;

export const Header = styled.h1`
  margin: 0;
  padding: 0;
  color: #ffff;
`;
