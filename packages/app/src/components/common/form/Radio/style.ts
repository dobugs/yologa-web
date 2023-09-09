import { CSSObject } from '@emotion/react';

const wrap: CSSObject = {
  display: 'flex',
  alignItems: 'center',
  fontSize: '18px',
  lineHeight: '19px',

  '> input': {
    appearance: 'none',
    width: 24,
    height: 24,
    margin: '0 4px 0 0',
    transition: 'border 0.5s ease-out',

    'focus-visible': {
      outlineOffset: 'max(2px, 0.1em)',
      outline: 'max(2px, 0.1em) dotted tomato',
    },

    ':checked': {
      border: '0.4em solid tomato',
    },

    ':hover': {
      boxShadow: '0 0 0 max(4px, 0.2em) lightgray',
      cursor: 'pointer',
    },

    ':disabled': {
      backgroundColor: 'lightgray',
      boxShadow: 'none',
      opacity: 0.5,
      cursor: 'not-allowed',
    },
  },
};

export { wrap };
