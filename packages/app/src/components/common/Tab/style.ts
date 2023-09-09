import { CSSObject, Theme } from '@emotion/react';

const wrap = (theme: Theme): CSSObject => ({
  overflowY: 'visible',
  overflowX: 'auto',
  whiteSpace: 'nowrap',
  boxShadow: `${theme.color.base} 0px 1px 0px`,
  boxSizing: 'border-box',
  padding: '4px 0 5px 0',
});

const item =
  (activated: boolean) =>
  (theme: Theme): CSSObject => ({
    padding: '2px',

    '&:not(:first-of-type)': {
      marginLeft: 16,
    },

    color: activated ? theme.color.textAccentSecondary : theme.color.textGrey2,
    ...(activated && { borderBottom: `solid 2px ${theme.color.textAccentSecondary}` }),
  });

export { wrap, item };
