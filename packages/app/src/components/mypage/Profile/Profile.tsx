import { MemberQuery } from 'queries';
import React from 'react';
import { wrap, imageWrap, messageWrap } from './style';
import DefaultProfileImage from 'assets/images/default-user.png';

const maskNickname = (val: string) => (val.length > 10 ? val.slice(0, 7) + '.'.repeat(3) : val);

function Profile() {
  const { data } = MemberQuery.useGetProfile();

  return (
    <div css={wrap}>
      <div css={imageWrap}>
        <figure>
          <img
            src={data?.profileUrl ?? DefaultProfileImage}
            onError={event => (event.currentTarget.src = DefaultProfileImage)}
          />
          <figcaption>{data?.nickname}</figcaption>
        </figure>
      </div>
      <div css={messageWrap}>
        <p>
          {data?.nickname ? (
            <>
              <b>{maskNickname(data.nickname)}</b> 님,
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
