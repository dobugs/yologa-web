import React, { HTMLAttributes, PropsWithChildren } from 'react';
import Item from './Item';

type Props = PropsWithChildren & HTMLAttributes<HTMLUListElement>;

function List({ children, ...props }: Props) {
  return <ul {...props}>{children}</ul>;
}

List.Item = Item;

export default List;
