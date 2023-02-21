import React, { Outlet } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { headerState, navState } from 'stores/ui';
import { useEffectOnce } from '@common/utils/hooks';
import { IHeaderState, INavState } from 'types/ui';

interface Props {
  headerVisible?: boolean;
  headerType?: IHeaderState['type'];
  navVisible?: boolean;
  activeNav?: INavState['activeNav'];
}

function Layout({ headerVisible = true, headerType = 'default', navVisible = true, activeNav }: Props) {
  const setHeaderState = useSetRecoilState(headerState);
  const setNavState = useSetRecoilState(navState);

  useEffectOnce(() => {
    setHeaderState(prev => ({ ...prev, isShow: headerVisible, type: headerType }));
    setNavState(prev => ({ ...prev, isShow: navVisible, ...(activeNav && { activeNav }) }));
  });

  return <Outlet />;
}

export default Layout;
