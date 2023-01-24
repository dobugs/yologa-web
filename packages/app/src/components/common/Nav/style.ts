import { CSSObject } from '@emotion/react';

const nav: CSSObject = {
  position: 'fixed',
  bottom: 0,
  left: 0,
  zIndex: 1000,
  width: '100%',
  background: '#fff',
  borderTop: '1px solid #DBDBDB',
};

const wrap: CSSObject = {
  margin: 'auto',
  maxWidth: 480,
  padding: '8px 24px',
  height: 64,
};

const list: CSSObject = {
  display: 'flex',
  height: '100%',
  alignItems: 'center',
  gap: 8,

  '& > li': {
    flex: 1,
  },
};

const button: CSSObject = {
  width: '100%',

  '& img': {
    width: 36,
    height: 36,
  },
};

export { nav, wrap, list, button };
