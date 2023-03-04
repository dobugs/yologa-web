import { CSSObject } from '@emotion/react';

const wrap: CSSObject = {
  width: '218px',
  height: '36px',
  border: '1px solid #ddd',
  borderRadius: '3px',
  fontSize: '14px',
  color: '#333',
  appearance: 'none',
  padding: '0 20px 0 14px',
  backgroundPosition: 'right 10px center',

  ':focus': {
    border: '1px solid #333',
    outline: 'none',
  },

  ':disabled': {
    color: '#999',
    opacity: 0.5,
  },
};

export { wrap };
