import React from 'react';
import { CommonComponent } from 'components';
import { Outlet } from 'react-router-dom';
import { main, sectionWrapper } from './styles';
import { headerState, navState } from 'stores/ui';
import { useRecoilValue } from 'recoil';

function Main() {
  const { type, isShow: isHeaderShow } = useRecoilValue(headerState);
  const { isShow: isNavShow, activeNav } = useRecoilValue(navState);

  return (
    <>
      <CommonComponent.Header type={type} isShow={isHeaderShow} />
      <main css={main({ isHeaderShow, isNavShow })}>
        <section css={sectionWrapper({ isHeaderShow, isNavShow })}>
          <Outlet />
        </section>
      </main>
      <CommonComponent.Nav isShow={isNavShow} activated={activeNav} />
      <footer />
    </>
  );
}

export default Main;
