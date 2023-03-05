import { CSSObject, Theme } from '@emotion/react';
import { clickable } from 'styles/common';

const nav: CSSObject = {
  position: 'fixed',
  bottom: 0,
  left: 0,
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

const button = (theme: Theme): CSSObject => ({
  width: '100%',
  height: '100%',
  borderRadius: 12,
  ...clickable(theme),

  '& img': {
    width: 24,
    height: 24,
  },
});

export { nav, wrap, button };
