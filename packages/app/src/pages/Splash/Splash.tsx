import React, { useEffect } from 'react';

import Logo from 'assets/images/yologa-hanguel-white.png';
import { logoArea, wrap } from 'pages/Splash/style';
import { useNavigate } from 'react-router-dom';
import { PATH } from 'data/pages';

function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate(PATH.LOGIN, { replace: true });
    }, 1500);
  });

  return (
    <div css={wrap}>
      <div css={logoArea}>
        <img src={Logo} alt={'logo'} />
      </div>
    </div>
  );
}

export default Splash;
