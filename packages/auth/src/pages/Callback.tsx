import { css } from '@emotion/react';
import React, { useEffect, useMemo } from 'react';
import Spinner from 'components/Spinner';
import { useParams, useSearchParams } from 'react-router-dom';
import { AuthAPI } from 'api';
import { OAUTH_PROVIDER } from 'types/oauth';

function Callback() {
  const { provider } = useParams();
  const [sp] = useSearchParams();

  const code = sp.get('code');

  if (!provider) {
    return <>올바른 접근이 아닙니다.</>;
  }

  useEffect(() => {
    AuthAPI.login(provider as OAUTH_PROVIDER, location.origin + location.pathname, code!);
  }, []);

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
    </>
  );
}

export default Callback;
