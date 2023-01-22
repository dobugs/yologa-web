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

  body {
    font-family: 'NotoSansKR';
  }

  * {
    letter-spacing: -0.27px;
  }
`;

export default global;
