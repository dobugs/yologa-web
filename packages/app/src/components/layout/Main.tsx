import React from 'react';
import { CommonComponent } from 'components';
import { Outlet } from 'react-router-dom';
import { sectionWrapper } from './styles';
import { UIStore } from 'stores';
import { useRecoilValue } from 'recoil';

function Main() {
  const { type, isShow } = useRecoilValue(UIStore.headerState);

  return (
    <>
      <CommonComponent.Header type={type} isShow={isShow} />
      <main>
        <section css={sectionWrapper}>
          <div>
            <Outlet />
          </div>
        </section>
      </main>
      <footer />
    </>
  );
}

export default Main;
