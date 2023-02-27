import React, { PropsWithChildren } from 'react';
import { wrap, head, contents, close } from './style';

interface Props {
  title: React.ReactNode;
  handleClose: () => void;
}

function Modal({ children, title, handleClose }: PropsWithChildren<Props>) {
  return (
    <div css={wrap}>
      <div css={head}>
        <p>{title}</p>
        <button type="button" onClick={handleClose} css={close}>
          닫기
        </button>
      </div>
      <div css={contents}>{children}</div>
    </div>
  );
}

export default Modal;
