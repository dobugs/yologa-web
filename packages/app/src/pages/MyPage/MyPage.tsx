import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet';
import { MyPageComponent } from 'components';
import Fallback from 'components/common/Fallback';
import { wrap } from './style';

function MyPage() {
  return (
    <>
      <Helmet>
        <title>마이페이지 :: 러닝할 땐 욜로가!</title>
      </Helmet>
      <div css={wrap}>
        <Suspense fallback={<Fallback />}>
          <MyPageComponent.Profile />
        </Suspense>

        <MyPageComponent.Menus />
        <MyPageComponent.Footer />
      </div>
    </>
  );
}

export default MyPage;
