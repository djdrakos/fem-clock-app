import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
:root {
  --black: hsl(0, 0%, 0%);
  --white: hsl(0, 0%, 100%);
  --grey-dark: hsl(0, 0%, 19%);
  --grey-light: hsl(0, 0%, 60%);
}

*, *::before, *::after {
  box-sizing: border-box;
}

* {
  margin: 0;
}

html, body, #root {
  height: 100%;
}

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--white);
  background-color: var(--black);
  /* background-image: ${({ theme }) => theme.background}; */
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  /* line-height: 1rem; */
  scroll-behavior: smooth;
  /* -webkit-transition: background-color .25s ease-out, color .25s ease-out;
  -moz-transition: background-color .25s ease-out, color .25s ease-out;
  -o-transition: background-color .25s ease-out, color .25s ease-out;
  transition: background-color .25s ease-out, color .25s ease-out; */
}

#root {
  margin: 0 auto;
}

img, picture {
  display: block;
  max-width: 100%;
}

input, button, textarea, select {
  font: inherit;
  background: inherit;
  padding: 0;
}

ul, ol {
  list-style-type: none;
  padding: 0;
}

button {
  cursor: pointer;
  color: var(--grey-dark);
  background: var(--white);
  border-radius: 28px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: .3125rem;
  display: flex;
  flex-direction: row;
  padding: 8px;
  column-gap: 13px;
  align-content: center;
  align-items: center;
  border: none;
}

svg {
  fill: var(--black);
  stroke: var(--black);
  background-color: var(--black);
  border-radius: 50%;
  height: 40px;
  width: 40px;
}

p {
  font-weight: 400;
  font-size: 1.125rem;
  line-height: calc(28/18);
  text-transform: capitalize;
}

h1 {
  display: inline-block;
  font-size: 12.5rem;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -.025rem;
  text-transform: capitalize;
}

h2 {
  font-size: 3.5rem;
  font-weight: 700;
  line-height: calc(68/56);
  text-transform: capitalize;
}

h3 {
  font-size: 1.5rem;
  font-weight: 700;
  line-height: calc(28/24);
  text-transform: uppercase;
  letter-spacing: .3rem;
}

h4 {
  font-size: 1.25rem;
  font-weight: 400;
  line-height: calc(28/20);  
  text-transform: uppercase;
  letter-spacing: .25rem;
}

h5 {
  font-size: 1.125rem;
  font-weight: 700;
  line-height: calc(28/18);  
  text-transform: capitalize;
}
h6 {
  font-size: .9375rem;
  font-weight: 400;
  text-transform: uppercase;
  line-height: calc(28/15);
  letter-spacing: .1875rem;
}
`