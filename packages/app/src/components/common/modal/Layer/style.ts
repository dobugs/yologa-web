import { CSSObject, Theme } from '@emotion/react';

const wrap = (theme: Theme): CSSObject => ({
  position: 'fixed',
  width: 'calc(100vw - 16px)',
  height: 'calc((var(--vh, 1vh) * 100) - 16px)',
  maxWidth: 640,
  backgroundColor: theme.color.white,
  boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
  borderRadius: 12,
  overflow: 'auto',
  display: 'flex',
  flexDirection: 'column',
});

const closeWrap = (theme: Theme): CSSObject => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  textAlign: 'right',
  padding: '4px 4px',
  borderLeftTopRadius: '12px',
  borderRightTopRadius: '12px',
  background: 'rgba(0, 0, 0, 0.01)',
  backdropFilter: 'blur(2px)',
  boxShadow: 'rgba(0, 0, 0, 0.1) 0 4px 4px -4px',

  '> button': {
    display: 'inline-block',
    backgroundColor: 'transparent',
    width: 'auto',
    padding: '8px 16px',
  },
});

const contentWrap = (theme: Theme): CSSObject => ({
  overflow: 'auto',
  overscrollBehavior: 'contain',
  padding: 16,
});

export { wrap, closeWrap, contentWrap };
