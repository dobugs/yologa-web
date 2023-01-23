import { css } from '@emotion/react';
import React from 'react';
import Spinner from 'Spinner';

function Callback() {
  /**
   * @todo
   * 1. OAuthProviders type
   * 2. Component Records
   * 3. Render component -> send token
   */

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
