import React, { useEffect } from 'react';

import { LoginComponent, CommonComponent } from 'components';
import { PROVIDER } from 'data/oauth';
import * as LoginStyle from './style';
import { useLogin } from 'components/login';
import useToastMessage from 'hooks/useToastMessage';

type ProviderType = (typeof PROVIDER)[keyof typeof PROVIDER];

function Login() {
  const toast = useToastMessage();
  const { login, status, isFetching } = useLogin();

  useEffect(() => {
    if (status === 'error') {
      toast.error('서버에 문제가 생겨 로그인할 수 없습니다. 관리자에게 문의해주세요');
    }
  }, [status]);

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
    </div>
  );
}

export default Login;
