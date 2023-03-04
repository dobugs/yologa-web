import { CSSObject, Theme } from '@emotion/react';

const wrap = (theme: Theme): CSSObject => ({
  background: theme.color.white,
  borderRadius: '12px',
  minWidth: '300px',
  '> div': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '40px 30px',
    fontSize: '16px',
  },
  '> hr': {
    width: '100%',
    height: '1px',
    background: '#f7f7f7',
    margin: 0,
    border: 0,
  },
  '> button': {
    width: '100%',
    height: '56px',
    fontWeight: 500,
    fontSize: '16px',
    textAlign: 'center',
    color: theme.color.primary,
    backgroundColor: theme.color.white,
    transition: 'background-color .1s ease-out',
    borderBottomLeftRadius: '12px',
    borderBottomRightRadius: '12px',

    ':active, :hover': {
      backgroundColor: theme.color.base,
    },
  },
});

export { wrap };
