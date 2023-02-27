import { CSSObject, Theme } from '@emotion/react';

const wrap: CSSObject = {
  marginTop: 'auto',
  marginBottom: '2.4rem',
  padding: '0 2.4rem',
};

const logoutArea = (theme: Theme): CSSObject => ({
  textAlign: 'right',

  button: {
    color: theme.color.black,
    opacity: 0.7,
    fontSize: 14,
    textDecoration: 'underline',
  },
});

export { wrap, logoutArea };
