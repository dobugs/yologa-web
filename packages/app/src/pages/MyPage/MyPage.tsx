import { MyPageComponent } from 'components';
import React from 'react';

function MyPage() {
  return (
    <>
      <MyPageComponent.Profile />
      <MyPageComponent.Menus />
    </>
  );
}

export default MyPage;
