import React, { useEffect } from 'react';

import logo from 'assets/svg/logo.svg';
import { logoArea, wrap } from 'pages/Splash/style';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { UIStore } from 'stores';
import { PATH } from 'data/pages';

function Splash() {
  const navigate = useNavigate();
  const setHeaderState = useSetRecoilState(UIStore.headerState);

  useEffect(() => {
    setHeaderState(state => ({ ...state, isShow: false }));
  }, []);

  useEffect(() => {
    setTimeout(() => {
      navigate(PATH.MY_PAGE);
    }, 1500);
  });

  return (
    <div css={wrap}>
      <div css={logoArea}>
        <img src={logo} alt={'logo'} />
      </div>
    </div>
  );
}

export default Splash;
