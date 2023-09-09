import React, { HTMLAttributes } from 'react';
import { wrap } from 'components/common/Spinner/style';

interface Props extends HTMLAttributes<HTMLDivElement> {
  color?: string;
}

function Spinner({ color = '#e31c79', ...props }: Props) {
  return <div css={wrap(color)} {...props} />;
}

export default Spinner;
