import { CSSObject } from '@emotion/react';

const wrap: CSSObject = {
  position: 'fixed',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  background: 'rgba(0, 0, 0, 0.7)',
  zIndex: 999,

  '& > *': {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
};

export { wrap };
