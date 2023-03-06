import { ButtonComponent } from 'components/common';
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
      <ButtonComponent.Text type="button" onClick={onClose}>
        확인
      </ButtonComponent.Text>
    </div>
  );
}

export default Alert;
