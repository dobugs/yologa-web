import { CSSObject, Theme } from '@emotion/react';

const wrap: CSSObject = {
  marginBottom: '4.8rem',
};

const list: CSSObject = {
  display: 'flex',
  flexDirection: 'column',
  margin: '2.4rem',
  background: '#f6f9fc',
  padding: '2.4rem 1.6rem',
  borderRadius: '12px',
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
