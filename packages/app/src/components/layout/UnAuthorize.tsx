import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { authState } from 'stores/auth';
import { PATH } from 'data/pages';

function UnAuthorize() {
  const auth = useRecoilValue(authState);

  if (auth) {
    return <Navigate to={`${PATH.ROOT}`} />;
  }

  return <Outlet />;
}

export default UnAuthorize;
