import React, { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { UIStore } from 'stores';

function MyPage() {
  const setHeaderState = useSetRecoilState(UIStore.headerState);
  const setNavState = useSetRecoilState(UIStore.navState);

  useEffect(() => {
    setHeaderState(state => ({ ...state, isShow: true }));
    setNavState(state => ({ ...state, isShow: true }));
  }, []);

  return <>MyPage</>;
}

export default MyPage;
