import React from 'react';

import { useVh } from 'hooks';
import { Outlet } from 'react-router-dom';

function Base() {
  useVh();

  return (
    <>
      <Outlet />
    </>
  );
}

export default Base;
