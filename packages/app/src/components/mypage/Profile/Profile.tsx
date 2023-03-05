import { MemberQuery } from 'queries';
import React from 'react';
import { wrap, imageWrap, messageWrap } from './style';
import { Thumbnail } from 'components/common';

const maskNickname = (val: string) => (val.length > 10 ? val.slice(0, 7) + '.'.repeat(3) : val);

function Profile() {
  const { data } = MemberQuery.useGetProfile();

  return (
    <div css={wrap}>
      <div css={imageWrap}>
        <Thumbnail src={data?.profileUrl} width={100} height={100} />
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
