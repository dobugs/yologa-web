import { CommonComponent } from 'components';
import { AuthQuery } from 'queries';
import React from 'react';
import { wrap, logoutArea } from './style';

function Footer() {
  const { mutate: logout } = AuthQuery.useLogout();
  // TODO: status 로그아웃 disable 하기

  return (
    <div css={wrap}>
      <div css={logoutArea}>
        <button type="button" onClick={() => logout()}>
          로그아웃
        </button>
      </div>
      <CommonComponent.Copyright />
    </div>
  );
}

export default Footer;
