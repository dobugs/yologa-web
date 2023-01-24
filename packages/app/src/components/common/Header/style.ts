import { CSSObject } from '@emotion/react';

const header: CSSObject = {
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 1000,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  height: '7.2rem',
  borderBottom: '1px solid #DBDBDB',
  background: '#fff',

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
      height: 'calc(7.2rem - 1px)',
    },
  },

  '& > .right': {
    flex: '0 0 4.8rem',
  },
};

export { header };
