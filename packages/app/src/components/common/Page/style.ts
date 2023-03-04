import { CSSObject } from '@emotion/react';

const wrap: CSSObject = {
  paddingTop: '1.6rem',

  ' > h1': {
    padding: '2.4rem 2.4rem 1.2rem',
    fontSize: '2.8rem',
  },

  ' > p': {
    fontSize: '1em',
    opacity: 0.7,
    padding: '0 2.4rem 1.2rem',
  },

  '> .page-wrap': {
    padding: '0 2.4rem',
    margin: '4.8rem 0 8rem',
  },
};

export { wrap };
