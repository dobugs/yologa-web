import { MemberQuery } from 'queries';
import defaultUserImage from 'assets/images/default-user.png';
import React from 'react';

function Profile() {
  const { data } = MemberQuery.useGetProfile();

  return (
    <div>
      <div>
        <figure>
          <img src={data?.data?.profileUrl ?? defaultUserImage} />
          <figcaption>{`${data?.data?.nickname} 님 안녕하세요!`}</figcaption>
        </figure>
      </div>
      <div>
        <p>{`${data?.data?.nickname} 님 안녕하세요!`}</p>
      </div>
    </div>
  );
}

export default Profile;
