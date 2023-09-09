import { List } from 'components/common';
import * as MenuStyle from 'components/common/Menu/style';
import theme from 'styles/theme';
import { clickable } from 'styles/common';
import React from 'react';
import { GeolocationPermissionCard } from 'components';
import usePermissions from 'hooks/usePermissions';

function Settings() {
  const { results, recheck } = usePermissions(['geolocation']);

  return (
    <List>
      <List.Item css={[MenuStyle.wrap, clickable(theme.color.base)]}>
        <GeolocationPermissionCard
          status={results.geolocation.status}
          text={results.geolocation.text}
          onClick={recheck}
        />
      </List.Item>
    </List>
  );
}

export default Settings;
