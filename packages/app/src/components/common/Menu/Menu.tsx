import { ReactNode } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import * as MenuStyle from './style';

interface Props {
  icon: ReactNode;
  children: ReactNode;
  to: string;
}

function Menu({ icon, children, to }: Props) {
  return (
    <div css={MenuStyle.wrap}>
      <Link to={to} css={MenuStyle.link}>
        <div css={MenuStyle.iconWrap}>{icon}</div>
        <div css={MenuStyle.name}>{children}</div>
      </Link>
    </div>
  );
}

export default Menu;
