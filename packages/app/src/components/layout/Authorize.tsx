import React from 'react';
import { Navigate, Outlet, useSearchParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { authState } from 'stores/auth';

function Authorize() {
  const auth = useRecoilValue(authState) || true;

  if (auth) {
    return <Outlet />;
  }

  // todo auth 도입시 진행
  // return <Outlet />;
  return <Navigate to={'/login'} />;
}

export default Authorize;
