import { Theme } from '@emotion/react';
import { clickable } from 'styles/common';

const common = (theme: Theme) => ({
  transition: 'opacity 0.1s ease-out',
  opacity: 1,

  '&:active': {
    opacity: 0.8,
  },

  ':disabled': {
    backgroundColor: theme.color.base,
    cursor: 'not-allowed',
  },
});

const solid = (theme: Theme) => ({
  color: theme.color.white,
  backgroundColor: theme.color.black,
  fontSize: '1.8rem',
  display: 'block',
  width: '100%',
  padding: '1.6rem',
  borderRadius: '3px',

  ...common(theme),
});

const text = (theme: Theme) => ({
  color: theme.color.primary,
  backgroundColor: theme.color.white,
  fontSize: '1.8rem',
  display: 'block',
  width: '100%',
  padding: '1.6rem',
  borderRadius: '3px',

  ...clickable(theme),
});

export { solid, text };
