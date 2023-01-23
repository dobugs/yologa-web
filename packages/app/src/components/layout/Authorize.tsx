import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { authState } from 'stores/auth';

function Authorize() {
  const auth = useRecoilValue(authState);

  if (auth) {
    return <Outlet />;
  }

  return <Navigate to={'/login'} />;
}

export default Authorize;
