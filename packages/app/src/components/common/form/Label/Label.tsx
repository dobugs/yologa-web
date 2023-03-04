import React, { HTMLAttributes } from 'react';
import { wrap } from './style';

function Label({ children, ...props }: HTMLAttributes<HTMLLabelElement>) {
  return (
    <label {...props} css={wrap}>
      {children}
    </label>
  );
}

export default Label;
