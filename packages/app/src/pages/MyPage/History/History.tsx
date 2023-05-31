import { Page, Tab } from 'components/common';
import React, { ReactNode, useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';

const TAB_ITEMS = [
  <Link key="participated" to={'/my-page/history/participated'} replace>
    참여목록
  </Link>,
  <Link key={'hosted'} to={'/my-page/history/hosted'} replace>
    주최목록
  </Link>,
];

function History() {
  const [tab, setTab] = useState<ReactNode>(TAB_ITEMS[0]);

  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname.endsWith('participated')) {
      setTab(TAB_ITEMS[0]);
      return;
    }

    if (pathname.endsWith('hosted')) {
      setTab(TAB_ITEMS[1]);
      return;
    }

    navigate('participated', { replace: true });
  }, [[pathname]]);

  return (
    <Page type="LIST" header="러닝 히스토리" description="여태껏 달려온 기록을 확인해보세요.">
      <Tab items={TAB_ITEMS} current={tab} />

      <Outlet />
    </Page>
  );
}

export default History;
