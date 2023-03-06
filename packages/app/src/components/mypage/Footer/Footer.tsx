import { CommonComponent } from 'components';
import { ButtonComponent } from 'components/common';
import { AuthQuery } from 'queries';
import React from 'react';
import { wrap, logoutArea } from './style';

function Footer() {
  const { mutate: logout, isLoading } = AuthQuery.useLogout();

  return (
    <div css={wrap}>
      <div css={logoutArea}>
        <ButtonComponent.Text type="button" onClick={() => logout()} disabled={isLoading}>
          로그아웃
        </ButtonComponent.Text>
      </div>
      <CommonComponent.Copyright />
    </div>
  );
}

export default Footer;
