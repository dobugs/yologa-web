import React from 'react';
import logo from 'assets/images/yologa-main-text.png';
import { hero } from './style';

function LoginHero() {
  return (
    <div css={hero}>
      <h1>
        <p>러닝할 땐 욜로가!</p>
        <img src={logo} alt="logo" />
      </h1>
    </div>
  );
}

export default LoginHero;
