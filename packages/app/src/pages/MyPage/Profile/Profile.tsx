import React, { Suspense, useMemo } from 'react';

import * as ProfileComponent from 'components/profile';
import { MemberQuery } from 'queries';

import Fallback from 'components/common/Fallback';
import { IProfile } from 'types/member';
import useToastMessage from 'hooks/useToastMessage';
import { wrap, hr } from './style';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const toast = useToastMessage();
  const navigate = useNavigate();
  const { data } = MemberQuery.useGetProfile();

  const { mutateAsync: mutateProfile } = MemberQuery.useUpdateProfile();

  const { mutateAsync: mutateImage } = MemberQuery.useUpdateImage();

  const resultHandler = useMemo(() => {
    return {
      image: {
        success: () => toast.success('프로필 이미지를 변경했습니다.'),
        error: () => toast.error('프로필 이미지를 변경할 수 없습니다.'),
      },
      profile: {
        success: () => toast.success('프로필 정보를 변경했습니다.'),
        error: () => toast.error('프로필 정보를 변경할 수 없습니다.'),
      },
    };
  }, []);

  const handleImageChange = (data: FormData) => {
    mutateImage(data).then(resultHandler.image.success).catch(resultHandler.image.error);
  };

  const handleProfileChange = (data: Pick<IProfile, 'nickname' | 'phoneNumber'>) => {
    mutateProfile(data)
      .then(() => {
        resultHandler.profile.success();
        navigate(-1);
      })
      .catch(resultHandler.profile.error);
  };

  return (
    <Suspense fallback={<Fallback />}>
      <div css={wrap}>
        <ProfileComponent.Image
          data={data as IProfile}
          handleImageChange={handleImageChange}
          onError={resultHandler.image.error}
        />

        <hr css={hr} />

        <ProfileComponent.Form data={data as IProfile} handleSubmit={handleProfileChange} />
      </div>
    </Suspense>
  );
}

export default Profile;
