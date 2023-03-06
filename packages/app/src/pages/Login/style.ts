import { CSSObject, Theme } from '@emotion/react';
import { splashBackground } from 'pages/Splash/style';

const login = (theme: Theme): CSSObject => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 8,
  padding: 24,
  color: theme.color.white,
  height: 'calc(var(--vh, 1vh) * 100)',

  ...splashBackground(theme),
});

export { login };
