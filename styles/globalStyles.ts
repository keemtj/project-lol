import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${normalize}
  *,
  * & {
    box-sizing: border-box;
  }
  html {
    font-size: 10px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, 'SF Pro Display'
  }
  html, body  {
    width: 100%;
    height: 100%;
  }
  body {
    background-color: ${({ theme }) => theme.color.bgColor};
  }
  ul,ol,li {
    list-style: none;
  }
  button {
    border: none;
    background: transparent;
    padding: 0;
    margin: 0;
    font-size: 10px;
  }
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.color.text};
  }
`;

export default GlobalStyle;
