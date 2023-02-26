import { MemberQuery } from 'queries';
import defaultUserImage from 'assets/images/default-user.png';
import React from 'react';
import { wrap, imageWrap, messageWrap } from './style';

function Profile() {
  const { data } = MemberQuery.useGetProfile();

  return (
    <div css={wrap}>
      <div css={imageWrap}>
        <figure>
          <img src={data?.data?.profileUrl ?? defaultUserImage} />
          <figcaption>{`${data?.data?.nickname} 님 안녕하세요!`}</figcaption>
        </figure>
      </div>
      <div css={messageWrap}>
        <p>
          {`${data?.data?.nickname} 님`}
          <br />
          안녕하세요!
        </p>
      </div>
    </div>
  );
}

export default Profile;
