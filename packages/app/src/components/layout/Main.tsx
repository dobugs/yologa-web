import React from 'react';
import { CommonComponent } from 'components';
import { Outlet } from 'react-router-dom';
import { main, sectionWrapper } from './styles';
import { UIStore } from 'stores';
import { useRecoilValue } from 'recoil';

function Main() {
  const { type, isShow: isHeaderShow } = useRecoilValue(UIStore.headerState);
  const { isShow: isNavShow, activeNav } = useRecoilValue(UIStore.navState);

  return (
    <>
      <CommonComponent.Header type={type} isShow={isHeaderShow} />
      <main css={main({ isHeaderShow, isNavShow })}>
        <section css={sectionWrapper}>
          <div>
            <Outlet />
          </div>
        </section>
      </main>
      <CommonComponent.Nav isShow={isNavShow} activated={activeNav} />
      <footer />
    </>
  );
}

export default Main;
