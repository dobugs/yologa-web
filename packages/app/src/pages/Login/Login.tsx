import React, { useEffect, useRef } from 'react';

import { LoginComponent, CommonComponent } from 'components';
import { PROVIDER } from 'data/oauth';
import * as LoginStyle from './style';
import { useLogin } from 'components/login';
import useAuthFrame from 'components/login/useAuthFrame';
import useToastMessage from 'hooks/useToastMessage';

type ProviderType = (typeof PROVIDER)[keyof typeof PROVIDER];

function Login() {
  const frameWrapperRef = useRef<HTMLDivElement | null>(null);

  const toast = useToastMessage();
  const { login, status, isFetching, provider, getOAuthOptions, openLoginLink, isAuth, getStorageToken } = useLogin();

  const { setInfo, isFrameLoaded } = useAuthFrame({
    provider,
    wrapper: frameWrapperRef,
  });

  useEffect(() => {
    if (status === 'success' && isFrameLoaded) {
      setInfo(getOAuthOptions());
      setTimeout(openLoginLink, 0);
    }

    if (status === 'error') {
      toast.error('로그인을 할 수 없습니다.');
    }
  }, [status, isFrameLoaded]);

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
