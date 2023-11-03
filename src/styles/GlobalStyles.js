import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
/* CSS Reset by Mirkov Sasa https://github.com/mirkovsasa/CSS-Reset/blob/main/Reset.css */

/* Resetting defaults */
* {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: transparent;
    box-sizing: border-box;
}

/* Setting border box model for easier sizing of elements */
*, *::before, *::after {
  box-sizing: border-box;
}

  :root {
    --gold: #FFBF2E;
    --white: #EFEFEF;
    --red: #9E1E1B;
    --orange: #C39F4D;
    --darkgray: #585858;
    --blue: #1777BE;
    --black: #1B0F07;
    --select-border: var(--darkgray);
    --select-focus: var(--blue);
    --select-arrow: var(--darkgray);
  }
  html {
    // background-image: url();
    // background-size: cover;
    // background-repeat: no-repeat;
    // background-position: center center;
    // background-attachment: fixed;
    font-size: 10px;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  html, body {
    min-height: 100dvh;
    max-width: 100%;
    margin: 0;
    overflow-x: hidden;
  }

  body {
    overflow-y: hidden;
  }

  p a {
    color: var(--blue);
    text-decoration: underline;
  }

  button {
    display: flex;
    max-width: 80rem;
    margin: 1.5rem auto;
    padding: 2rem 0;
    justify-content: center;
    box-shadow: 0.3rem 0.3rem 0.5rem var(--black);
    background: var(--blue);
    color: white;
    border: 0;
    border-radius: 4rem;
    cursor: pointer;
    --cast: 0.2rem;
    box-shadow: 0.5rem 0.5rem 0rem rgba(0,0,0,0.2);
    transition: all 0.1s ease-in-out;
    a {
      text-decoration: none;
      color: white;
      font-size: 2.25rem;
    }
    &:hover {
      background: #fff;
      color: var(--blue);
      box-shadow: -0.1rem -0.1rem 1rem rgba(0,0,0,0.2);
    }
  }
  .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  } 

  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 12px;
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--red) #fff;
  }
  body::-webkit-scrollbar-track {
    background: transparent;
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--red) ;
    border-radius: 6px;
  }
  img {
    max-width: 100%;
  }
  @media (max-width: 400px) {
    h1 {
      font-size: 2rem;
    }
  }
`

export default GlobalStyles
