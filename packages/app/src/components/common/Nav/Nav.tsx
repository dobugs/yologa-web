import React from 'react';
import { NavType } from 'types/ui';
import { button, list, nav, wrap } from './style';
import { useSetRecoilState } from 'recoil';

import { ITEMS } from 'data/nav';
import { useNavigate } from 'react-router-dom';
import { UIStore } from 'stores';

interface Props {
  isShow: boolean;
  activated: NavType;
}

function Nav({ isShow, activated }: Props) {
  const navigate = useNavigate();
  const setFooterState = useSetRecoilState(UIStore.navState);

  if (!isShow) {
    return null;
  }

  const handleClick = (path: string) => {
    setFooterState(state => ({ ...state, activeNav: path }));
    navigate(path);
  };

  return (
    <nav css={nav}>
      <div css={wrap}>
        <ul css={list}>
          {ITEMS.map(o => (
            <li key={o.path}>
              <button type="button" onClick={() => handleClick(o.path)} css={button}>
                <img src={o.path === activated ? o.icon.activated : o.icon.default} alt={o.path} />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default React.memo(Nav);
