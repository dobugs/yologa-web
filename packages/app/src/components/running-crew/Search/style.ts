import { CSSObject, Theme } from '@emotion/react';
import { clickable } from 'styles/common';

const wrap = (theme: Theme): CSSObject => ({
  position: 'fixed',
  top: 0,
  left: '50%',
  transform: 'translateX(-50%)',
  padding: '2.4rem',
  width: '100%',
  maxWidth: 640,
});

const box = (theme: Theme): CSSObject => ({
  borderRadius: 12,
  backgroundColor: theme.color.white,
  height: '5.4rem',
  boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',

  input: {
    border: 0,
    width: '100%',
    height: 'inherit',
    borderRadius: 'inherit',
    cursor: 'pointer',
    paddingLeft: 16,
    fontSize: '1.8rem',
    ...clickable(theme),

    '&::placeholder': {
      fontSize: '1em',
    },
  },
});

export { wrap, box };
