import { css, SerializedStyles } from '@emotion/react';

const wrap = (color: string): SerializedStyles => css`
  position: relative;
  width: auto;
  height: auto;

  .path {
    transform-origin: center;
    animation: rotate 0.75s infinite linear;
    fill: ${color || '#e31c79'};
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
`;

export { wrap };
