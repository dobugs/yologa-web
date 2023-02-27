import { MyPageComponent } from 'components';
import Fallback from 'components/common/Fallback';
import React, { Suspense } from 'react';
import { wrap } from './style';

function MyPage() {
  return (
    <div css={wrap}>
      <Suspense fallback={<Fallback />}>
        <MyPageComponent.Profile />
      </Suspense>

      <MyPageComponent.Menus />
      <MyPageComponent.Footer />
    </div>
  );
}

export default MyPage;
