import { CSSObject } from '@emotion/react';

const nav: CSSObject = {
  position: 'fixed',
  bottom: 0,
  left: 0,
  zIndex: 1000,
  width: '100%',
  background: '#fff',
  boxShadow: 'rgba(0, 0, 0, 0.1) 0 -4px 4px -4px',
};

const wrap: CSSObject = {
  display: 'flex',
  alignItems: 'center',
  margin: 'auto',
  maxWidth: 640,
  height: 48,
  gap: 8,
};

const button: CSSObject = {
  width: '100%',
  height: '100%',

  '& img': {
    width: 24,
    height: 24,
  },
};

export { nav, wrap, button };
