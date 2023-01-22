import React, { PropsWithChildren } from 'react';
import { CommonComponent } from 'components';

function Main({ children }: PropsWithChildren) {
  return (
    <>
      <CommonComponent.Header type={'default'} />
      <main>{children}</main>
      <footer />
    </>
  );
}

export default Main;
