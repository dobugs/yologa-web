import { CSSObject, Theme } from '@emotion/react';
import { clickable } from 'styles/common';

const wrap: CSSObject = {
  marginTop: 'auto',
  marginBottom: '2.4rem',
  padding: '0 2.4rem',
};

const logoutArea = (theme: Theme): CSSObject => ({
  textAlign: 'right',

  button: {
    color: theme.color.textGrey1,
    opacity: 0.7,
    fontSize: 14,
    textDecoration: 'underline',
    borderRadius: 12,

    ...clickable(theme.color.base),
  },
});

export { wrap, logoutArea };
