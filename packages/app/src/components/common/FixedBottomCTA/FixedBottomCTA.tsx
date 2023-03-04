import React from 'react';

import { ComponentType } from 'react';
import { css } from '@emotion/react';
import Portal from 'components/layout/Portal';

import { ButtonComponent } from 'components/common';

type TypeAProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

function TypeA(props: TypeAProps) {
  return (
    <Portal>
      <div
        css={css`
          position: fixed;
          left: 0;
          bottom: 0;
          width: 100%;
        `}
      >
        <div
          css={css`
            padding: 0 24px max(18px, env(safe-area-inset-bottom));
            margin: 0 auto;
            max-width: 640px;
          `}
        >
          <ButtonComponent.Solid {...props} />
        </div>
      </div>
    </Portal>
  );
}

type TypeBProps = {
  leftButton: React.ReactNode;
  rightButton: React.ReactNode;
};

function TypeB({ leftButton, rightButton }: TypeBProps) {
  return (
    <Portal>
      <div
        css={css`
          position: fixed;
          left: 0;
          bottom: 0;
          width: 100%;
        `}
      >
        <div
          css={css`
            padding: 0 20px 18px;
            display: flex;

            > :nth-of-type(1) {
              margin-right: 8px;
            }
          `}
        >
          {leftButton}
          {rightButton}
        </div>
      </div>
    </Portal>
  );
}

const FixedBottomCTA = TypeA as ComponentType<TypeAProps> & { TypeB: ComponentType<TypeBProps> };
FixedBottomCTA.TypeB = TypeB;

export default FixedBottomCTA;
