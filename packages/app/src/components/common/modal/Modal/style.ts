import { CSSObject, Theme } from '@emotion/react';

const wrap = (theme: Theme): CSSObject => ({
  maxWidth: '80vw',
  minWidth: 320,
  maxHeight: '80vh',
  background: theme.color.white,
  padding: '30px',
  borderRadius: '12px',
  display: 'flex',
  flexDirection: 'column',
});

const head: CSSObject = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '20px',
  '> p': {
    color: '#495057',
    fontSize: '24px',
    fontWeight: 500,
  },
};

const contents: CSSObject = {
  flex: 1,
  overflowX: 'auto',
  overflowY: 'auto',
  marginBottom: '30px',
};

const close = (theme: Theme) => ({
  color: theme.color.base,
  fontSize: 14,
});

export { wrap, head, contents, close };
