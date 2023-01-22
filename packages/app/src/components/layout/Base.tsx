import React from 'react';
import { Outlet } from 'react-router-dom';

function Base() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default Base;
