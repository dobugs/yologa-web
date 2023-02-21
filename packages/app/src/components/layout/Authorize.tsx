import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { authState } from 'stores/auth';

import { useEffectOnce } from '@common/utils/hooks';
import useToastMessage from 'hooks/useToastMessage';

function Authorize() {
  const toast = useToastMessage();
  const auth = useRecoilValue(authState);

  useEffectOnce(() => {
    toast.success('로그인되었습니다 :)');
  }, !!auth);

  if (auth) {
    return <Outlet />;
  }

  return <Navigate to={'/login'} />;
}

export default Authorize;
