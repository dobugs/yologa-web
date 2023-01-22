import React, { PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';

function Base({ children }: PropsWithChildren) {
  return (
    <>
      <header></header>
      <main>{children}</main>
      <footer />
    </>
  );
}

export default Base;
