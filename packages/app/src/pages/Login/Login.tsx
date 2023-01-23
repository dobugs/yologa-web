import React, { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { UIStore } from 'stores';

import { LoginComponent } from 'components';
import { login } from './style';

function Login() {
  const setHeaderState = useSetRecoilState(UIStore.headerState);

  useEffect(() => {
    setHeaderState(state => ({ ...state, isShow: false }));
  }, []);

  const handleClickGoogle = () => {
    //todo
  };
  const handleClickKakao = () => {
    //todo
  };

  return (
    <div css={login}>
      <LoginComponent.Hero />
      <LoginComponent.Description />
      <LoginComponent.Actions onClickGoogle={handleClickGoogle} onClickKakao={handleClickKakao} />
    </div>
  );
}

export default Login;
