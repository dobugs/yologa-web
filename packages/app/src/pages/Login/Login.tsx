import React, { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { UIStore } from 'stores';

import { LoginComponent, CommonComponent } from 'components';
import { login } from './style';
import { AuthAPI } from 'api';
import { OAUTH_PROVIDER } from 'data/oauth';

function Login() {
  const setHeaderState = useSetRecoilState(UIStore.headerState);
  const setNavState = useSetRecoilState(UIStore.navState);

  useEffect(() => {
    setHeaderState(state => ({ ...state, isShow: false }));
    setNavState(state => ({ ...state, isShow: false }));
  }, []);

  const handleClickGoogle = async () => {
    const { data } = await AuthAPI.login(OAUTH_PROVIDER.GOOGLE, `http://localhost:3001/callback/google`);

    window.open(data.oauthLoginLink);
  };
  const handleClickKakao = async () => {
    const { data } = await AuthAPI.login(OAUTH_PROVIDER.KAKAO, `http://localhost:3001/callback/kakao`);

    window.open(data.oauthLoginLink);
  };

  return (
    <div css={login}>
      <LoginComponent.Hero />
      <LoginComponent.Description />
      <LoginComponent.Actions onClickGoogle={handleClickGoogle} onClickKakao={handleClickKakao} />
      <CommonComponent.Copyright />
    </div>
  );
}

export default Login;
