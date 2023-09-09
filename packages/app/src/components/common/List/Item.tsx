import { contentWrap } from './style';
import React, { HTMLAttributes, PropsWithChildren } from 'react';

type Props = PropsWithChildren<HTMLAttributes<HTMLLIElement>>;

function Item({ children, ...props }: Props) {
  return (
    <li {...props}>
      <div css={contentWrap}>{children}</div>
    </li>
  );
}

export default Item;
