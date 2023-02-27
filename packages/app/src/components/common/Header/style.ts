import { CSSObject } from '@emotion/react';

const header: CSSObject = {
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 1000,
  width: '100%',
  background: '#fff',
  boxShadow: 'rgba(0, 0, 0, 0.1) 0 4px 4px -4px',
};

const wrap: CSSObject = {
  display: 'flex',
  alignItems: 'stretch',
  height: '4.8rem',
  maxWidth: 640,
  margin: 'auto',

  '& > .left': {
    flex: '0 0 4.8rem',
    textAlign: 'center',

    '& > .back': {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      padding: '0.8rem',
    },
  },

  '& > .logo': {
    flex: 1,
    fontSize: 24,
    lineHeight: '4.8rem',
    textAlign: 'center',
  },

  '& > .right': {
    flex: '0 0 4.8rem',
  },
};

export { header, wrap };
