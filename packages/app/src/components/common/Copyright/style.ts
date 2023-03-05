import { CSSObject } from '@emotion/react';
import { Props } from './Copyright';
import { theme } from 'styles';

const wrap: CSSObject = {
  padding: 8,
};

const pg = (align: Props['align']): CSSObject => ({
  textAlign: align,
  fontSize: 12,
  color: theme.color.white,
});

export { wrap, pg };
