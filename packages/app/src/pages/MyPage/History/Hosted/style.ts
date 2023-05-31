import { CSSObject, Theme } from '@emotion/react';

const pageWrap: CSSObject = {
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  padding: '16px 0',
};

const desc = (theme: Theme): CSSObject => ({
  color: theme.color.textGrey2,
  fontSize: 14,
  wordBreak: 'keep-all',
  lineHeight: 1.375,
});

export { pageWrap, desc };
