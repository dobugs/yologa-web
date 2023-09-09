import React, { PropsWithChildren } from 'react';
import { wrap, contentWrap, closeWrap } from './style';
import { ButtonComponent } from 'components/common';
import { theme } from 'styles';
interface Props {
  close?: boolean;
  onClose?: () => void;
}

function Layer({ children, close, onClose }: PropsWithChildren<Props>) {
  return (
    <div css={wrap}>
      {close && (
        <div css={closeWrap}>
          <ButtonComponent.Text onClick={_ => onClose?.()} css={{ color: theme.color.primary }}>
            닫기
          </ButtonComponent.Text>
        </div>
      )}
      <div css={contentWrap}>{children}</div>
    </div>
  );
}

export default Layer;
