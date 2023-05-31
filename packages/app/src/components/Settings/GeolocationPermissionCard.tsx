import useAlert from 'hooks/useAlert';
import { IPermissionState } from 'hooks/usePermissions';
import React from 'react';
import { desc, permissionSettingCard, permissionStatus, content, btnWrap } from './style';

interface Props extends Omit<IPermissionState, 'key'> {
  onClick?: () => void;
}

function GeolocationPermissionCard({ status, text, onClick: handleClick }: Props) {
  const { add } = useAlert();

  const handleClickCard = () => {
    if (status !== 'granted') {
      add({
        content: '브라우저 혹은 기기 설정에서 위치 접근 권한을 허용해주세요.',
      });

      handleClick?.();
    }
  };

  return (
    <button onClickCapture={handleClickCard} css={btnWrap}>
      <div css={permissionSettingCard}>
        <span css={content}>위치 권한 허용</span> <b css={permissionStatus(status)}>{text}</b>
      </div>
      {(status === 'denied' || status === 'prompt') && <p css={desc}>위치 권한을 허용해주세요</p>}
    </button>
  );
}

export default GeolocationPermissionCard;
