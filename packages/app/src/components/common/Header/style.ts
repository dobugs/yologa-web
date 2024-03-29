import { CSSObject, Theme } from '@emotion/react';
import { theme } from 'styles';
import { clickable } from 'styles/common';

const header: CSSObject = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  background: theme.color.white,
  zIndex: 1,
  boxShadow: 'rgba(0, 0, 0, 0.1) 0 4px 4px -4px',
};

const wrap = (theme: Theme): CSSObject => ({
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
      borderRadius: '12px',

      ...clickable(theme.color.base),
    },
  },

  '& > .logo': {
    flex: 1,
    textAlign: 'center',

    img: {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
    },
  },

  '& > .right': {
    flex: '0 0 4.8rem',
  },
});

export { header, wrap };
