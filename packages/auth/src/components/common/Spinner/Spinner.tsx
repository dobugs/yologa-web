import React, { HTMLAttributes } from 'react';
import { wrap } from 'components/common/Spinner/style';

interface Props extends HTMLAttributes<SVGElement> {
  width?: number;
  height?: number;
  color?: string;
}

function Spinner({ width = 48, height = 48, color = '#e31c79', ...props }: Props) {
  return (
    <div css={wrap(color)}>
      <svg {...props} width={width} height={height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10.72,19.9a8,8,0,0,1-6.5-9.79A7.77,7.77,0,0,1,10.4,4.16a8,8,0,0,1,9.49,6.52A1.54,1.54,0,0,0,21.38,12h.13a1.37,1.37,0,0,0,1.38-1.54,11,11,0,1,0-12.7,12.39A1.54,1.54,0,0,0,12,21.34h0A1.47,1.47,0,0,0,10.72,19.9Z"
          className="path"
        />
      </svg>
    </div>
  );
}

export default Spinner;
