import { CSSObject } from '@emotion/react';

const wrap: CSSObject = {
  width: 100,
  height: 100,

  '> figure': {
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',

    '> img': {
      width: 'inherit',
      height: 'inherit',
      objectFit: 'cover',
      borderRadius: '50%',
    },
  },
};

export { wrap };
