import { CSSObject } from '@emotion/react';
import { Props } from './Copyright';

const wrap: CSSObject = {
  padding: 8,
};

const pg = (align: Props['align']): CSSObject => ({
  textAlign: align,
  fontSize: 12,
  color: '#515151',
});

export { wrap, pg };
