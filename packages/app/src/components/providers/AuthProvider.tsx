import React, { ReactNode, useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { authState } from 'stores/auth';
import { useEffectOnce } from '@common/utils/hooks';
import { IAuth } from 'types/auth';

interface Props {
  children: ReactNode;
}

function AuthProvider({ children }: Props) {
  const setToken = useSetRecoilState(authState);

  useEffectOnce(() => {
    const value = window.localStorage.getItem('@yologa/auth');
    setToken(value as IAuth | null);
  });

  const handleMessage = (e: MessageEvent) => {
    if (e.origin !== process.env.REACT_APP_DOBUGS_AUTH_WEB) return;

    const { type, data } = e.data;

    if (type === 'token') {
      window.localStorage.setItem('@yologa/auth', JSON.stringify(data));
      setToken(data);
    }
  };

  useEffect(() => {
    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return <>{children}</>;
}

export default AuthProvider;
