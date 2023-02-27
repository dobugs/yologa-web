import React from 'react';
import Spinner from '../Spinner';

interface Props {
  width?: unknown;
  height?: unknown;
}

function Fallback({ width, height = '20rem' }: Props) {
  return (
    <div css={{ position: 'relative', width: width as string, height: height as string }}>
      <div css={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%) !important' }}>
        <Spinner />
      </div>
    </div>
  );
}

export default Fallback;
