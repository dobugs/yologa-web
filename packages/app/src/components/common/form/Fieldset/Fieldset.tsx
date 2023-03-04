import React, { HTMLAttributes } from 'react';
import { DirectionType, wrap } from './style';

interface Props extends HTMLAttributes<HTMLFieldSetElement> {
  direction?: DirectionType;
}

function Fieldset({ children, direction, ...props }: Props) {
  return (
    <fieldset css={wrap(direction)} {...props}>
      {children}
    </fieldset>
  );
}

export default Fieldset;
