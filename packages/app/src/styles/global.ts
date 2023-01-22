import { css } from '@emotion/react';
import reset from './reset';
// import datePicker from './date-picker';

const global = css`
  ${reset.styles}
  button {
    border: none;
    background: none;
    cursor: pointer;
    padding: 0;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'NotoSansKR';
    font-size: 1.6rem;
  }

  * {
    letter-spacing: -0.27px;
  }
`;

export default global;
