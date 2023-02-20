import { CSSObject } from '@emotion/react';
import { PROVIDER } from 'data/oauth';

const hero: CSSObject = {
  marginTop: '16rem',
  h1: {
    fontSize: '2.8rem',
    fontWeight: 600,

    '& > img': {
      width: '100%',
      height: 'auto',
    },
  },
};

const description: CSSObject = {
  marginTop: 'auto',
  textAlign: 'center',
  lineHeight: 1.4,
  fontSize: '1.6rem',
  marginBottom: '1.6rem',
};

const actions: CSSObject = {
  marginBottom: '2.4rem',
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  width: '100%',
};

const actionButton = (type: (typeof PROVIDER)[keyof typeof PROVIDER]): CSSObject => ({
  boxShadow: '0px 0px 3px rgba(0, 0, 0, 0.084), 0px 2px 3px rgba(0, 0, 0, 0.168)',
  borderRadius: 18,
  backgroundColor: type === 'kakao' ? '#FEE500' : '#fff',
  height: '5.4rem',
  width: '100%',

  '& > .action-button__content': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
    fontSize: '1.6rem',
    color: 'rgba(0, 0, 0, 0.54)',
  },
});

const icon: CSSObject = {
  width: 28,
  height: 28,
};

export { hero, description, actions, actionButton, icon };
