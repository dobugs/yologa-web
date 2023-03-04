import { CSSObject, Theme } from '@emotion/react';

const wrap = (theme: Theme): CSSObject => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '2.4rem',
});

export { wrap };
