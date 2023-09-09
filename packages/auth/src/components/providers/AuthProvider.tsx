import React, { ReactNode, useEffect } from 'react';

interface Props {
  children: ReactNode;
}

const setStorageParams = async (data: unknown) => {
  const set = () => window.localStorage.setItem('@dobugs/auth', JSON.stringify(data));

  if (document.hasStorageAccess === undefined) {
    set();
    return;
  }

  const hasAccess = await document.hasStorageAccess();

  if (hasAccess) {
    set();
    return;
  }

  await document.requestStorageAccess().then(
    () => {
      set();
    },
    () => {
      alert('로그인할 수 없습니다');
    },
  );
};

function AuthProvider({ children }: Props) {
  const handleMessage = (e: MessageEvent) => {
    const { type, data } = e.data;

    if (type === 'deploy') {
      setStorageParams(data);
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
