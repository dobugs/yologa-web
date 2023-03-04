import { CSSObject, Theme } from '@emotion/react';

const wrap: CSSObject = {
  padding: '2.4rem',
  marginBottom: '5.6rem',
};

const hr = (theme: Theme) => ({
  margin: '2.4rem 0',
  borderTop: `dashed 1px ${theme.color.base}`,
});

export { wrap, hr };
