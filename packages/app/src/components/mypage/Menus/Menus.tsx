import { CommonComponent } from 'components';
import React from 'react';
import { list, wrap, hr } from './style';
import useMenus from './useMenus';

function Menus() {
  const { items } = useMenus();

  return (
    <div css={wrap}>
      {items.map((arr, idx) => (
        <React.Fragment key={`group-${idx + 1}`}>
          <ul css={list}>
            {arr.map(o => (
              <li key={o.name}>
                <CommonComponent.Menu key={o.name} icon={o.icon} to={o.to}>
                  {o.name}
                </CommonComponent.Menu>
              </li>
            ))}
          </ul>
          {idx !== items.length - 1 && <hr css={hr} />}
        </React.Fragment>
      ))}
    </div>
  );
}

export default Menus;
