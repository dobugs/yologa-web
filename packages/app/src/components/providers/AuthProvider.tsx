import { useEffectOnce } from '@common/utils';
import React, { ReactNode } from 'react';
import { useSetRecoilState } from 'recoil';
import { authState } from 'stores/auth';

interface Props {
  children: ReactNode;
}

function AuthProvider({ children }: Props) {
  const setToken = useSetRecoilState(authState);

  const handleStorage = () => {
    const value = window.localStorage.getItem('@yologa/auth');
    setToken(value ? JSON.parse(value) : null);
  };

  useEffectOnce(handleStorage);

  return <>{children}</>;
}

export default AuthProvider;
