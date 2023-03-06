import { Theme } from '@emotion/react';
import { clickable } from 'styles/common';

const solid = (theme: Theme) => ({
  color: theme.color.white,
  backgroundColor: theme.color.primaryShade,
  fontSize: '1.8rem',
  fontWeight: '500',
  display: 'block',
  width: '100%',
  padding: '1.6rem',
  borderRadius: '12px',

  ...clickable(theme.color.textAccentSecondary),
});

const text = (theme: Theme) => ({
  color: theme.color.primary,
  backgroundColor: theme.color.white,
  fontSize: '1.8rem',
  fontWeight: 500,
  display: 'block',
  width: '100%',
  padding: '1.6rem',
  borderRadius: '12px',

  ...clickable(theme.color.base),
});

export { solid, text };
