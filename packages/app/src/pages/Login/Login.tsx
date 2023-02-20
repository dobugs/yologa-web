import React, { useEffect, useRef } from 'react';
import { useSetRecoilState } from 'recoil';
import { UIStore } from 'stores';

import { LoginComponent, CommonComponent } from 'components';
import { PROVIDER } from 'data/oauth';
import * as LoginStyle from './style';
import { useLogin } from 'components/login';
import { toast } from 'react-toastify';
import useAuthFrame from 'components/login/useAuthFrame';
import { useNavigate } from 'react-router-dom';
import { PATH } from 'data/pages';

type ProviderType = (typeof PROVIDER)[keyof typeof PROVIDER];

function Login() {
  const setHeaderState = useSetRecoilState(UIStore.headerState);
  const setNavState = useSetRecoilState(UIStore.navState);

  useEffect(() => {
    setHeaderState(state => ({ ...state, isShow: false }));
    setNavState(state => ({ ...state, isShow: false }));
  }, []);

  const navigate = useNavigate();

  const frameWrapperRef = useRef<HTMLDivElement | null>(null);

  const { login, status, isFetching, provider, getOAuthOptions, openLoginLink, isAuth } = useLogin();

  const { setInfo, isFrameLoaded, remove } = useAuthFrame({
    provider,
    wrapper: frameWrapperRef,
  });

  useEffect(() => {
    if (status === 'success' && isFrameLoaded) {
      toast('성공');
      setInfo(getOAuthOptions());
      setTimeout(openLoginLink, 0);
    }

    if (status === 'error') {
      toast('실패');
    }
  }, [status, isFrameLoaded]);

  useEffect(() => {
    if (isAuth) {
      alert('로그인 사용자님 환영합니다!!');
      navigate(PATH.RUNNING_CREW);
    }
  }, [isAuth]);

  const handleClickGetOAuthLink = (provider: ProviderType) => {
    login(provider);
  };

  return (
    <div css={LoginStyle.login}>
      <LoginComponent.Hero />
      <LoginComponent.Description />
      <LoginComponent.Actions
        isFetching={isFetching}
        status={status}
        onClickGoogle={() => handleClickGetOAuthLink('google')}
        onClickKakao={() => handleClickGetOAuthLink('kakao')}
      />
      <CommonComponent.Copyright />

      <div ref={frameWrapperRef} />
    </div>
  );
}

export default Login;
