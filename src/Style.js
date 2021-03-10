import { createGlobalStyle } from 'styled-components';
import { MAX } from "./constants";

const GlobalStyles = createGlobalStyle`
  * {
    margin:0;
    padding: 0;
    line-height: 1.5em;
  }
  body {
    font-family: 'Open Sans', sans-serif;
    color: #4F4F4F;
  }
  p {
    font-size: 1.2rem;
    font-weight: 400;

      ${MAX.MEDIA_XS} {
      font-size: 1rem;
      }
  }

  .App {
  display: flex;
  width: 100%;
  min-height: 100vh;
}
`

export default GlobalStyles;