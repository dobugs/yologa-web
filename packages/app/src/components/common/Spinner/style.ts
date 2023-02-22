import { css, keyframes, SerializedStyles } from '@emotion/react';
import { theme } from 'styles';

const rotate = keyframes`
  from { 
    transform: rotate(0); 
  }
  to { 
    transform: rotate(360deg); 
  }
`;

const wrap = (color: string): SerializedStyles => css`
  position: relative;
  width: 48px;
  height: 48px;
  border: 6px solid ${color || '#e31c79'};
  border-radius: 50%;
  border-top-color: ${theme.color.base};
  animation: ${rotate} 0.8s linear infinite;
`;

export { wrap };
