import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { isAuth } from 'stores/auth';
import { PATH } from 'data/pages';

function UnAuthorize() {
  const auth = useRecoilValue(isAuth);

  if (auth) {
    return <Navigate to={`/${PATH.RUNNING_CREW}`} />;
  }

  return <Outlet />;
}

export default UnAuthorize;
