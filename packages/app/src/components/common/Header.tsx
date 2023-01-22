import React from 'react';
import { useNavigate } from 'react-router-dom';

import logo from 'assets/svg/logo.svg';

interface Props {
  type: 'default' | 'back';
}

function Header({ type }: Props) {
  const navigate = useNavigate();

  return (
    <header>
      {type === 'back' && (
        <button type="button" onClick={() => navigate(-1)}>
          back
        </button>
      )}
      <div>
        <img src={logo} alt={'back'} />
      </div>
    </header>
  );
}

export default React.memo(Header);
