import { CSSObject, Theme } from '@emotion/react';

const clickable = (theme: Theme): CSSObject => ({
  borderRadius: 3,
  transition: 'background-color 0.1s ease-out',

  '&:active, &:hover': {
    backgroundColor: theme.color.base,
  },

  ':disabled': {
    backgroundColor: theme.color.base,
    opacity: 0.5,
    cursor: 'not-allowed',
  },
});

export { clickable };
