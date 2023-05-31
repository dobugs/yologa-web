import { CSSObject, Theme } from '@emotion/react';

const btnWrap: CSSObject = {
  display: 'block',
  width: '100%',
};

const permissionStatus =
  (state: PermissionState | 'unset') =>
  (theme: Theme): CSSObject => ({
    fontWeight: 500,
    color: state === 'granted' ? theme.color.primary : state === 'denied' ? 'red' : theme.color.textAccentSecondary,
  });

const desc = (theme: Theme): CSSObject => ({
  marginTop: '4px',
  textAlign: 'left',
  color: theme.color.textGrey2,
  fontSize: 14,
});

const content = (theme: Theme): CSSObject => ({
  fontSize: 16,
  color: theme.color.textGrey1,
  fontWeight: 500,
});

const permissionSettingCard = (): CSSObject => ({
  position: 'relative',
  display: 'flex',
  justifyContent: 'space-between',
});

export { permissionStatus, desc, permissionSettingCard, content, btnWrap };
