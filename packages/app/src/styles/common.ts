import { CSSObject, Theme } from '@emotion/react';

const clickable = (theme: Theme): CSSObject => ({
  transition: 'background-color 0.1s ease-out',

  '&:active': {
    backgroundColor: theme.color.base,
  },

  ':disabled': {
    backgroundColor: theme.color.base,
    opacity: 0.5,
    cursor: 'not-allowed',
  },
});

export { clickable };
