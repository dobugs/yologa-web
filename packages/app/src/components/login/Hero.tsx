import React from 'react';
import logo from 'assets/svg/logo.svg';
import { hero } from './style';

function LoginHero() {
  return (
    <div css={hero}>
      <h1>
        <div>러닝할 땐 욜로가!</div>
        <img src={logo} alt="logo" />
      </h1>
    </div>
  );
}

export default LoginHero;
