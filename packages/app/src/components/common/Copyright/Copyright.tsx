import React from 'react';
import { wrap, pg } from './style';

interface Props {
  align?: 'left' | 'center' | 'right';
}

function Copyright({ align = 'center' }: Props) {
  return (
    <div css={wrap}>
      <p css={pg(align)}>©dobugs 2023</p>
    </div>
  );
}

export type { Props };
export default Copyright;
