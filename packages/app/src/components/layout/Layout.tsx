import { useEffect } from 'react';
import React, { Outlet, useLocation } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { headerState, navState } from 'stores/ui';
import { IHeaderState, INavState } from 'types/ui';

interface Props {
  headerVisible?: boolean;
  headerType?: IHeaderState['type'];
  navVisible?: boolean;
  activeNav?: INavState['activeNav'];
}

function Layout({ headerVisible = true, headerType = 'default', navVisible = true, activeNav }: Props) {
  const location = useLocation();
  const setHeaderState = useSetRecoilState(headerState);
  const setNavState = useSetRecoilState(navState);

  useEffect(() => {
    setHeaderState(prev => ({ ...prev, isShow: headerVisible, type: headerType }));
    setNavState(prev => ({ ...prev, isShow: navVisible, ...(activeNav && { activeNav }) }));
  }, [location.pathname]);

  return <Outlet />;
}

export default Layout;
