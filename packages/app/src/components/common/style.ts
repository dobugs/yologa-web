import { CSSObject } from '@emotion/react';

const header: CSSObject = {
  display: 'flex',
  alignItems: 'center',
  height: '7.2rem',
  borderBottom: '1px solid #DBDBDB',

  '& > .left': {
    flex: '0 0 4.8rem',
    textAlign: 'center',

    '& > .back': {
      width: '100%',
      height: '7.2rem',
      padding: '0.8rem',
    },
  },

  '& > .logo': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,

    '& img': {
      maxWidth: 240,
      height: '7.2rem',
    },
  },

  '& > .right': {
    flex: '0 0 4.8rem',
  },
};

export { header };
