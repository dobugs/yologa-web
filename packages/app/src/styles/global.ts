import { css } from '@emotion/react';
import reset from './reset';

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
    font-family: 'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto,
      'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji',
      'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
    font-size: 1.6rem;
    background-color: #f2f2f2;
  }

  * {
    letter-spacing: -0.27px;
  }
`;

export default global;
