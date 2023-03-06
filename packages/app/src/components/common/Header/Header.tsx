import React from 'react';
import { useNavigate } from 'react-router-dom';

import { header, wrap } from './style';
import { IoIosArrowBack } from 'react-icons/io';
import { IHeaderState } from 'types/ui';

import { theme } from 'styles';

import Logo from 'assets/images/yologa-hanguel-primary.png';

function Header({ type, isShow }: IHeaderState) {
  const navigate = useNavigate();

  if (!isShow) {
    return null;
  }

  return (
    <header css={header}>
      <div css={wrap}>
        <div className="left">
          {type === 'back' && (
            <button type="button" className="back" onClick={() => navigate(-1)}>
              <IoIosArrowBack size={24} color={theme.color.primary} />
            </button>
          )}
        </div>
        <h1 className="logo">
          <img src={Logo} alt="logo" />
        </h1>
        <div className="right"></div>
      </div>
    </header>
  );
}

export default React.memo(Header);
