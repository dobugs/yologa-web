import React, { ButtonHTMLAttributes } from 'react';
import { text } from './style';

function Text(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button {...props} css={text} />;
}

export default Text;
