import { CSSObject, Theme } from '@emotion/react';

const wrap: CSSObject = {
  margin: '2.4rem 0',
};

const list: CSSObject = {
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
};

const icon: CSSObject = {
  width: 36,
  height: 36,
};

const hr = (theme: Theme) => ({
  margin: '2.4rem 0',
  borderTop: `dashed 1px ${theme.color.base}`,
});

export { wrap, list, icon, hr };
