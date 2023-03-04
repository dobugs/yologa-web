import { CSSObject } from '@emotion/react';

const wrap: CSSObject = {
  position: 'relative',
  margin: '2.4rem',
};

const box: CSSObject = {
  position: 'relative',
  minWidth: 240,
  maxWidth: 320,
  width: '80%',
  padding: '1.6rem',
  margin: '0 auto',

  input: {
    position: 'absolute',
    transform: 'scale(0.75)',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    opacity: 0,
    outline: 'none',
    zIndex: 1,
  },

  figure: {
    position: 'relative',
    display: 'block',
    margin: 'auto',
    textAlign: 'center',
    paddingBottom: '100%',
    borderRadius: '50%',
    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',

    img: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: 'inherit',
    },
  },
};

export { wrap, box };
