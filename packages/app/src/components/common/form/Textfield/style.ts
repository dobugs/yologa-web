import { CSSObject, Theme } from '@emotion/react';

const wrap = (theme: Theme): CSSObject => ({
  padding: '1rem 1.6rem 0.8rem 0.8rem',
  border: '1px solid',
  borderColor: theme.color.base,
  fontSize: '1.125em',
  lineHeight: 1.5,
  borderRadius: '12px',
  boxSizing: 'border-box',
  background: '#f6f9fc',

  ':focus': {
    outline: 'none',
    borderColor: theme.color.primary,
  },

  '::placeholder': {
    color: 'currentcolor',
    fontSize: '0.875em',
    opacity: 0.6,
  },
});

export { wrap };
