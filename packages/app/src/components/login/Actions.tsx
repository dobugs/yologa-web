import React from 'react';
import google from 'assets/svg/ic-google.svg';
import kakao from 'assets/svg/ic-kakao.svg';
import { actionButton, actions, icon } from './style';
import { OAUTH_PROVIDER } from 'data/oauth';

interface Props {
  onClickGoogle: () => void;
  onClickKakao: () => void;
}

function LoginActions({ onClickGoogle, onClickKakao }: Props) {
  return (
    <div css={actions}>
      <button type="button" onClick={onClickGoogle} css={actionButton(OAUTH_PROVIDER.GOOGLE)}>
        <div className="action-button__content">
          <img src={google} alt="google" css={icon} />
          <span>구글로 로그인하기</span>
        </div>
      </button>
      <button type="button" onClick={onClickKakao} css={actionButton(OAUTH_PROVIDER.KAKAO)}>
        <div className="action-button__content">
          <img src={kakao} alt="kakao" css={icon} />
          <span>카카오로 로그인하기</span>
        </div>
      </button>
    </div>
  );
}

export default LoginActions;
