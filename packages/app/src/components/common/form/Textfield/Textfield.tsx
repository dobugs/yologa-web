import React, { InputHTMLAttributes } from 'react';
import { wrap } from './style';

type Props = InputHTMLAttributes<HTMLInputElement>;

function Input({ ...props }: Props) {
  return <input {...props} css={wrap} />;
}

export default Input;
