import React from 'react';
import { wrap } from './style';

function Background({ children }: React.PropsWithChildren<unknown>) {
  return <div css={wrap}>{children}</div>;
}

export default Background;
