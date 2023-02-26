import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { isAuth } from 'stores/auth';

import useToastMessage from 'hooks/useToastMessage';
import { useEffectOnce } from '@common/utils';

function Authorize() {
  const toast = useToastMessage();
  const auth = useRecoilValue(isAuth);

  useEffectOnce(() => {
    toast.success('로그인되었습니다 :)');
  }, !!auth);

  if (auth) {
    return <Outlet />;
  }

  return <Navigate to={'/login'} />;
}

export default Authorize;
