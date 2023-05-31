import React, { ButtonHTMLAttributes } from 'react';
import { solid } from './style';

function Solid(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button {...props} css={solid} />;
}

export default Solid;
