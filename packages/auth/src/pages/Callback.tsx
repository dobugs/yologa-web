import { css } from '@emotion/react';
import React from 'react';
import Spinner from 'components/Spinner';
import { useParams } from 'react-router-dom';
import { useOAuthCallback } from 'hooks';

function Callback() {
  const { provider } = useParams();
  useOAuthCallback(provider);

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
