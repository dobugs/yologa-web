import { CSSObject } from '@emotion/react';

const clickable = (color: string): CSSObject => ({
  cursor: 'pointer',
  transition: 'background-color 0.1s ease-out, transform 0.2s ease-in-out',

  '&:active': {
    backgroundColor: color,
    transform: 'scale(0.95)',
  },

  ':disabled': {
    backgroundColor: color,
    opacity: 0.5,
    cursor: 'not-allowed',
  },
});

export { clickable };
