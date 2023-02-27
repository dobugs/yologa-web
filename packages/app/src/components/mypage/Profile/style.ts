import { CSSObject } from '@emotion/react';

const wrap: CSSObject = {
  padding: '48px 24px',
  display: 'flex',
  alignItems: 'center',
  gap: 36,
};

const imageWrap: CSSObject = {
  flex: '0 1 100px',
  width: 100,
  height: 100,

  img: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    borderRadius: '50%',
  },

  figcaption: {
    visibility: 'hidden',
  },
};

const messageWrap: CSSObject = {
  flex: 1,

  p: {
    wordBreak: 'break-all',
    fontSize: '2.4rem',
    fontWeight: 'bold',
    lineHeight: 1.35,
  },
};

export { wrap, imageWrap, messageWrap };
