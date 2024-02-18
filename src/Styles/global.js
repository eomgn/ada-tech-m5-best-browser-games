import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

* {
  padding: 0;
  margin: 0;
  vertical-align: baseline;
  list-style: none;
  box-sizing: border-box;
  border: 0;
}

body {
  background: #312613;
  background: linear-gradient(1deg,#312613 0%, #000000 80%);
  background: -webkit-linear-gradient(1deg,#312613 0%, #000000 80%);
  background: -moz-linear-gradient(1deg,#312613 0%, #000000 80%);
  
  color: #ffffff;
}

:root {
  --primary-color: #020228;
  --secondary-color: #f7b84b;
  --tertiary-color: #000000;
  
  --btn-bg-color-gradient: linear-gradient(
    45deg,
    #9b34ef 0%,
    #490cb0 20%,
    transparent 50%
  );

  --btn-link-bg-color: #fff;
  --btn-link-color: #000;
  --card-bg-color: linear-gradient(0deg, transparent, #3b1e63);
  
  --divider-bg-color: linear-gradient(
    90deg,
    #5516ba,
    rgba(255, 0, 229, 0.5) 80%
  );

  --nav-bg-color: rgba(0, 0, 0, 0.3);
  --text-color: #fff;
  --link-color: #9e86ff;
  --form-bg-color: rgba(211, 211, 211, 0.06);
  --form-field-bg-color: rgba(0, 0, 0, 0.2);
  --form-field-border: 1px solid rgba(255, 255, 255, 0.7);
  --form-field-placeholder: rgba(255, 255, 255, 0.7);
  --form-field-error: rgb(255, 76, 76);

  scroll-behavior: smooth;
}

@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;700&display=swap");

/* Custom Scroll */
::-webkit-scrollbar {
  width: 8px;
}
  
::-webkit-scrollbar-thumb {
  background: var(--tertiary-color);
  border-radius: 10px;
}
  
::-webkit-scrollbar-thumb:hover {
  background: var(--secondary-color);
}  
`