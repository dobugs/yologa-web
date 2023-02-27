import React from 'react';
import { wrap } from './style';

interface Props {
  onClose: () => void;
}

function Alert({ children, onClose }: React.PropsWithChildren<Props>) {
  return (
    <div css={wrap}>
      <div>{children}</div>
      <hr />
      <button type="button" onClick={onClose}>
        확인
      </button>
    </div>
  );
}

export default Alert;
