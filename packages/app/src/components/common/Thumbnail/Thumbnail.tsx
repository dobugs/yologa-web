import React from 'react';
import DefaultUserImage from 'assets/images/default-user.png';
import { wrap } from './style';

interface Props {
  width?: number;
  height?: number;
  src?: string;
}

function Thumbnail({ width, height, src }: Props) {
  return (
    <div css={[wrap, { width, height }]}>
      <figure>
        <img src={src ?? DefaultUserImage} onError={e => (e.currentTarget.src = DefaultUserImage)} />
      </figure>
    </div>
  );
}

export default Thumbnail;
