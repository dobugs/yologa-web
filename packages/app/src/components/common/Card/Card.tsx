import React, { HTMLAttributes, PropsWithChildren, ReactNode } from 'react';
import { imageWrap, textWrap, wrap } from './style';

interface Props extends Omit<HTMLAttributes<HTMLDivElement>, 'title'>, PropsWithChildren {
  title: ReactNode;
  meta?: ReactNode;
  thumbnail?: string;
}

function Card({ title, meta, thumbnail, children }: Props) {
  return (
    <div css={wrap}>
      {thumbnail && (
        <div css={imageWrap}>
          <img src={thumbnail} alt="thumbnail" />
        </div>
      )}
      <div css={textWrap}>
        <div className="title">{title}</div>
        {meta && <p className={'meta'}>{meta}</p>}
        <div className={'content'}>{children}</div>
      </div>
    </div>
  );
}

export default Card;
