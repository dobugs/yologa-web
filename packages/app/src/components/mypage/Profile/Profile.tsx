import { MemberQuery } from 'queries';
import defaultUserImage from 'assets/images/default-user.png';
import React from 'react';
import { wrap, imageWrap, messageWrap } from './style';

const maskNickname = (val: string) => (val.length > 10 ? val.slice(0, 7) + '.'.repeat(3) : val);

function Profile() {
  const { data } = MemberQuery.useGetProfile();

  return (
    <div css={wrap}>
      <div css={imageWrap}>
        <figure>
          <img src={data?.data?.profileUrl ?? defaultUserImage} />
          <figcaption>{data?.data?.nickname}</figcaption>
        </figure>
      </div>
      <div css={messageWrap}>
        <p>
          {data?.data?.nickname ? (
            <>
              {maskNickname(data.data.nickname)}
              <br /> 안녕하세요!
            </>
          ) : (
            <>
              프로필을
              <br />
              설정해주세요!
            </>
          )}
        </p>
      </div>
    </div>
  );
}

export default Profile;
