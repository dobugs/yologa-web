import React from 'react';
import { useGoogleMapApi } from '@common/map';
import { useRecoilValue } from 'recoil';
import { MapStore } from 'stores';
import { IPosition } from 'types/map';
import { useEffectOnce } from '@common/utils/hooks';
import { map } from './style';

interface Props {
  api: typeof google;
  currentPosition?: IPosition | null;
  zoom?: number;
}

function GoogleMap({ api, currentPosition, zoom }: Props) {
  const mapOptions = useRecoilValue(MapStore.mapOptionsState);
  const { createMap, handleChangePosition } = useGoogleMapApi(api);

  useEffectOnce(() => {
    handleChangePosition({ center: currentPosition, zoom });
  }, !!currentPosition);

  return <div ref={el => el && createMap(el, mapOptions)} css={map} />;
}

export type { Props };
export default GoogleMap;
