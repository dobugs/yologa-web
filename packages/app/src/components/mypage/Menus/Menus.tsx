import { CommonComponent } from 'components';
import React from 'react';
import useMenus from './useMenus';

function Menus() {
  const { items } = useMenus();

  return (
    <div>
      {items.map((arr, idx) => (
        <React.Fragment key={`group-${idx + 1}`}>
          {arr.map(o => (
            <CommonComponent.Menu key={o.name} icon={o.icon} to={o.to}>
              {o.name}
            </CommonComponent.Menu>
          ))}
          <hr />
        </React.Fragment>
      ))}
    </div>
  );
}

export default Menus;
