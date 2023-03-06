import { CSSObject, Theme } from '@emotion/react';

const wrap: CSSObject = {
  margin: '24px 24px',
  padding: '24px 16px',
  display: 'flex',
  alignItems: 'center',
  gap: 36,
  borderRadius: '12px',
  background: '#f6f9fc',
};

const imageWrap: CSSObject = {
  flex: '0 1 100px',
  width: 100,
  height: 100,

  figcaption: {
    visibility: 'hidden',
  },
};

const messageWrap = (theme: Theme): CSSObject => ({
  flex: 1,

  p: {
    wordBreak: 'break-all',
    fontSize: '2.4rem',
    lineHeight: 1.35,

    b: {
      color: theme.color.primaryShade,
    },
  },
});

export { wrap, imageWrap, messageWrap };
