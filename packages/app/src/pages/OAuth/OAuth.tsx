import { css } from '@emotion/react';
import { Spinner } from 'components/common';
import { PATH } from 'data/pages';
import useToastMessage from 'hooks/useToastMessage';
import { AuthQuery } from 'queries';
import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { AuthStore } from 'stores';

function OAuth() {
  const navigate = useNavigate();
  const setAuth = useSetRecoilState(AuthStore.authState);
  const [sp] = useSearchParams();
  const toast = useToastMessage();

  const { data, failureCount } = AuthQuery.useGetOAuthToken({ authorizationCode: sp.get('code') ?? '' });

  useEffect(() => {
    if (data) {
      setAuth(data);
      navigate(PATH.ROOT);
    }
  }, [data]);

  useEffect(() => {
    if (failureCount >= 3) {
      toast.error('로그인할 수 없습니다. 잠시 후 시도해주세요.');
      navigate(`/${PATH.LOGIN}`);
    }
  }, [failureCount]);

  return (
    <div
      css={css`
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      `}
    >
      <Spinner />
    </div>
  );
}

export default OAuth;
