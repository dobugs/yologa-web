import React from 'react';
import { NavItemKeyType } from 'types/ui';
import { button, nav, wrap } from './style';
import { useSetRecoilState } from 'recoil';

import { ITEMS } from 'data/nav';
import { useNavigate } from 'react-router-dom';
import { UIStore } from 'stores';

interface Props {
  isShow: boolean;
  activated: NavItemKeyType;
}

function Nav({ isShow, activated }: Props) {
  const navigate = useNavigate();
  const setFooterState = useSetRecoilState(UIStore.navState);

  if (!isShow) {
    return null;
  }

  const handleClick = (path: NavItemKeyType) => {
    setFooterState(state => ({ ...state, activeNav: path }));
    navigate(path);
  };

  return (
    <nav css={nav}>
      <div css={wrap}>
        {ITEMS.map(o => (
          <button key={o.path} type="button" onClick={() => setTimeout(() => handleClick(o.path), 200)} css={button}>
            <img src={o.path === activated ? o.icon.activated : o.icon.default} alt={o.path} />
          </button>
        ))}
      </div>
    </nav>
  );
}

export default React.memo(Nav);
