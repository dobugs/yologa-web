import { PATH } from 'data/pages';
import React, { useMemo } from 'react';
import { CgProfile } from 'react-icons/cg';
import { GiSandsOfTime } from 'react-icons/gi';
import { IoMdHelp, IoMdNotificationsOutline, IoMdSettings } from 'react-icons/io';

function useMenus() {
  const items = useMemo(
    () => [
      [
        { name: '프로필', icon: <CgProfile />, to: PATH.PROFILE },
        { name: '알림', icon: <IoMdNotificationsOutline />, to: PATH.NOTIFICATION },
        { name: '러닝 히스토리', icon: <GiSandsOfTime />, to: PATH.HISTORY },
      ],
      [
        { name: '사용자 가이드', icon: <IoMdHelp />, to: PATH.GUIDE },
        { name: '시스템 설정', icon: <IoMdSettings />, to: PATH.SETTINGS },
      ],
    ],
    [],
  );

  return {
    items,
  };
}

export default useMenus;
