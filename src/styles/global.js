import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Avenir Next';
    src: url(/fonts/AvenirNext-Regular.otf);
  }

  @font-face {
    font-family: 'Avenir Next';
    src: url(/fonts/AvenirNext-Bold.otf);
    font-weight: bold;
  }

  @font-face {
    font-family: 'Avenir Next';
    src: url(/fonts/AvenirNext-It.otf);
    font-style: italic;
  }

  @font-face {
    font-family: 'Avenir Next';
    src: url(/fonts/AvenirNext-Medium.ttf);
    font-weight: 500;
  }

  body {
    font-family: 'Avenir Next';
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h2 {
    font-weight: 500;
    font-size: 24px;
    color: #000000;
    margin: 0;
    padding: 0;
  }

  h3 {
    font-weight: 500;
    font-size: 24px;
    color: #000000;
    margin: 0;
    padding: 0;
  }

  h4 {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #a8c3a0;
    margin: 0;
    padding: 0;
  }

  p {
    font-weight: 400;
    font-size: 16px;
    color: #000000;
    margin: 0;
    padding: 0;
  }

  span {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #000000;
    margin: 0;
    padding: 0;
  }

  ::-webkit-scrollbar {
    visibility: hidden;
    width: 0px;
  }
`;
