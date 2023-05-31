import React, { PropsWithChildren } from 'react';
import { wrap } from './style';

interface Props {
  type?: 'LIST' | 'DEFAULT';
  header?: React.ReactNode;
  description?: React.ReactNode;
}

function Page({ type = 'DEFAULT', header, description, children }: PropsWithChildren<Props>) {
  return (
    <article css={wrap(type)}>
      {header && <h1>{header}</h1>}
      {description && <p>{description}</p>}
      <div className={`page-wrap`}>{children}</div>
    </article>
  );
}

export default Page;
