import { CSSObject, Theme } from '@emotion/react';

const contentList: CSSObject = {
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  marginTop: 16,
};

const contentTitle = (theme: Theme): CSSObject => ({
  fontSize: 14,
  color: theme.color.textGrey1,

  '& + dd': {
    fontSize: 12,
    color: theme.color.textGrey2,
  },
});

const statusLabel = (theme: Theme): CSSObject => ({
  fontSize: 14,
  fontWeight: 500,
  color: theme.color.textAccentPrimary,
});

export { contentList, contentTitle, statusLabel };
