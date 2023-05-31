import { css } from '@emotion/react';
import React, { useEffect, useRef } from 'react';
import Spinner from 'components/common/Spinner';
import { useSearchParams } from 'react-router-dom';
import { AuthQuery } from 'queries';
import { useOAuthChannel } from 'hooks';
import { getParams } from 'hooks/useOAuthChannel';

function Callback() {
  const frameRef = useRef<HTMLIFrameElement | null>(null);
  const [sp] = useSearchParams();
  const { provider, referrer, redirect_url } = getParams() ?? {
    provider: '',
    referrer: '',
    redirect_url: '',
  };

  const { data, status } = AuthQuery.useGetOAuthToken({
    provider,
    referrer,
    redirect_url,
    authorizationCode: sp.get('code') ?? '',
  });

  const { isIframeLoaded, loadIframe, transfer } = useOAuthChannel({
    frameRef,
    token: data,
  });

  useEffect(() => {
    if (data) {
      loadIframe();
    }
  }, [data]);

  useEffect(() => {
    if (isIframeLoaded) {
      transfer();
    }
  }, [isIframeLoaded]);

  if (status === 'error') {
    return <>올바른 접근이 아닙니다.</>;
  }

  return (
    <>
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

      <iframe
        sandbox="allow-modalsallow-storage-access-by-user-activation allow-scripts allow-same-origin"
        ref={frameRef}
      />
    </>
  );
}

export default Callback;
