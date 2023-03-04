import { Theme } from '@emotion/react';

const common = (theme: Theme) => ({
  transition: 'opacity 0.1s ease-out',
  opacity: 1,

  '&:active, &:hover': {
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

export { solid };
