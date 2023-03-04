import { CSSObject } from '@emotion/react';
import { navHeight } from 'components/layout/styles';

const wrap: CSSObject = {
  height: `calc(var(--vh, 1vh) * 100 - ${navHeight}px)`,
};

export { wrap };
