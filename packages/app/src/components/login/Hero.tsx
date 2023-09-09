import React from 'react';
import Logo from 'assets/images/yologa-hanguel-white.png';
import { hero } from './style';

function LoginHero() {
  return (
    <div css={hero}>
      <h1>
        <span>러닝할 땐 </span>
        <img src={Logo} alt="logo" />
      </h1>
    </div>
  );
}

export default LoginHero;
