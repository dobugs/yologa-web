import { CSSObject } from '@emotion/react';

const list: CSSObject = {
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
    position: 'relative',
    padding: '0 2.4rem',
    marginTop: '4.8rem',
  },
};

const wrap = (type: 'LIST' | 'DEFAULT'): CSSObject => ({
  ...(type === 'LIST' && list),

  ' >.page-wrap': {
    position: 'relative',
  },
});

export { wrap };
