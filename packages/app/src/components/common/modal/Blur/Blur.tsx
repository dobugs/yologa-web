import React from 'react';
import { wrap } from './style';

function Blur({ children }: React.PropsWithChildren<unknown>) {
  return <div css={wrap}>{children}</div>;
}

export default Blur;
