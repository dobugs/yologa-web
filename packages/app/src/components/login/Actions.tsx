import React from 'react';
import google from 'assets/svg/ic-google.svg';
import kakao from 'assets/svg/ic-kakao.svg';
import { actionButton, actions, icon } from './style';
import { QueryStatus } from '@tanstack/react-query';

interface Props {
  onClickGoogle: () => void;
  onClickKakao: () => void;
  status: QueryStatus;
  isFetching: boolean;
}

function LoginActions({ onClickGoogle, onClickKakao, status, isFetching }: Props) {
  return (
    <div css={actions}>
      <button
        type="button"
        onClick={onClickGoogle}
        css={actionButton('google')}
        disabled={status === 'loading' && isFetching}
      >
        <div className="action-button__content">
          <img src={google} alt="google" css={icon} />
          <span>구글로 로그인하기</span>
        </div>
      </button>
      <button
        type="button"
        onClick={onClickKakao}
        css={actionButton('kakao')}
        disabled={status === 'loading' && isFetching}
      >
        <div className="action-button__content">
          <img src={kakao} alt="kakao" css={icon} />
          <span>카카오로 로그인하기</span>
        </div>
      </button>
    </div>
  );
}

export default LoginActions;
