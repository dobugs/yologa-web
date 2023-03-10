import React from 'react';
import { useNavigate } from 'react-router-dom';

import logo from 'assets/svg/logo.svg';
import { header } from './style';
import { IoIosArrowBack } from 'react-icons/io';
import { IHeaderState } from 'types/ui';

type Props = IHeaderState;

function Header({ type, isShow }: Props) {
  const navigate = useNavigate();

  if (!isShow) {
    return null;
  }

  return (
    <>
      <header css={header}>
        <div className="left">
          {type === 'back' && (
            <button type="button" className="back" onClick={() => navigate(-1)}>
              <IoIosArrowBack size={24} />
            </button>
          )}
        </div>
        <div className="logo">
          <img src={logo} alt={'back'} />
        </div>
        <div className="right"></div>
      </header>
    </>
  );
}

export default React.memo(Header);
