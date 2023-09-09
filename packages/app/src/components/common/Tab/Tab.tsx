import React, { ReactNode } from 'react';
import { wrap, item as itemStyle } from './style';

interface Props {
  items: ReactNode[];
  current: ReactNode;
}

function Tab({ items, current }: Props) {
  return (
    <div css={wrap}>
      {items.map((item, index) => {
        return (
          <span key={index} css={itemStyle(current === item)}>
            {item}
          </span>
        );
      })}
    </div>
  );
}

export default Tab;
