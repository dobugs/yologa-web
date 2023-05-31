import { CSSObject, Theme } from '@emotion/react';

const wrap = (): CSSObject => ({
  boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
});

const imageWrap = (): CSSObject => ({
  paddingBottom: '75%',

  '> img': {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
  },
});

const textWrap = (theme: Theme): CSSObject => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
  padding: '16px',

  '.title': {
    fontWeight: 500,
    wordBreak: 'keep-all',
  },
  '.meta': {
    color: theme.color.textGrey2,
    fontSize: 14,
  },
  '.content': {
    fontSize: 14,
  },
});

export { wrap, imageWrap, textWrap };
