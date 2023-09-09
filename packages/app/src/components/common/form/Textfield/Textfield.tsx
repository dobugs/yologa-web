import React, { InputHTMLAttributes } from 'react';
import { wrap } from './style';

type Props = InputHTMLAttributes<HTMLInputElement>;

function Textfield({ ...props }: Props) {
  return <input {...props} css={wrap} />;
}

export default Textfield;
