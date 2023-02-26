import { ReactNode } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  icon: ReactNode;
  children: ReactNode;
  to: string;
}

function Menu({ icon, children, to }: Props) {
  return (
    <div>
      <Link to={to}>
        <div>{icon}</div>
        <div>{children}</div>
      </Link>
    </div>
  );
}

export default Menu;
