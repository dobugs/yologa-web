import { CommonComponent } from 'components';
import { AuthQuery } from 'queries';
import React from 'react';
import { wrap, logoutArea } from './style';

function Footer() {
  const { mutate: logout } = AuthQuery.useLogout();

  return (
    <div css={wrap}>
      <div css={logoutArea}>
        <button type="button" onClick={_ => logout()}>
          로그아웃
        </button>
      </div>
      <CommonComponent.Copyright />
    </div>
  );
}

export default Footer;
