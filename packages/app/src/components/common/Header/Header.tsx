import React from 'react';
import { useNavigate } from 'react-router-dom';

import { header, wrap } from './style';
import { IoIosArrowBack } from 'react-icons/io';
import { IHeaderState } from 'types/ui';

type Props = IHeaderState;

function Header({ type, isShow }: Props) {
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
              <IoIosArrowBack size={24} />
            </button>
          )}
        </div>
        <h1 className="logo">YOLOGA</h1>
        <div className="right"></div>
      </div>
    </header>
  );
}

export default React.memo(Header);
