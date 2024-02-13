import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  
  *{
    margin: 0;
    padding: 0;
  }
  
  body {
    background: #312613;
    background: linear-gradient(1deg,#312613 0%, #000000 80%);
    background: -webkit-linear-gradient(1deg,#312613 0%, #000000 80%);
    background: -moz-linear-gradient(1deg,#312613 0%, #000000 80%);

    color: #ffffff;
  }
`