import { css } from '@emotion/react';
import React, { useEffect, useRef } from 'react';
import Spinner from 'components/common/Spinner';
import { useSearchParams } from 'react-router-dom';
import { AuthQuery } from 'queries';
import { useOAuthChannel } from 'hooks';
import { getOptions } from 'hooks/useOAuthChannel';

function Callback() {
  const iframeWrapper = useRef<HTMLIFrameElement | null>(null);
  const [sp] = useSearchParams();

  const { redirect, isIframeLoaded, loadIframe, sendToken } = useOAuthChannel({ wrapper: iframeWrapper });

  const { data, status } = AuthQuery.useGetOAuthToken({
    ...getOptions(),
    authorizationCode: sp.get('code') ?? '',
  });

  useEffect(() => {
    if (data) {
      loadIframe(window.sessionStorage.getItem('referrer') ?? '');
    }
  }, [data]);

  useEffect(() => {
    if (data && isIframeLoaded) {
      sendToken(data);
      setTimeout(redirect, 100);
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

      <div ref={iframeWrapper} />
    </>
  );
}

export default Callback;
