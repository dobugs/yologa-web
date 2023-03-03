import { PATH } from 'data/pages';
import React, { useMemo } from 'react';
import { AiOutlineUser, AiOutlineQuestion } from 'react-icons/ai';
import { GiSandsOfTime } from 'react-icons/gi';
import { SlSettings } from 'react-icons/sl';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { icon } from './style';

function useMenus() {
  const items = useMemo(
    () => [
      [
        { name: '프로필', icon: <AiOutlineUser css={icon} />, to: `/${PATH.PROFILE}` },
        { name: '알림', icon: <IoMdNotificationsOutline css={icon} />, to: `/${PATH.NOTIFICATION}` },
        { name: '러닝 히스토리', icon: <GiSandsOfTime css={icon} />, to: `/${PATH.HISTORY}` },
      ],
      [
        { name: '사용자 가이드', icon: <AiOutlineQuestion css={icon} />, to: `/${PATH.GUIDE}` },
        { name: '시스템 설정', icon: <SlSettings css={icon} />, to: `/${PATH.SETTINGS}` },
      ],
    ],
    [],
  );

  return {
    items,
  };
}

export default useMenus;
