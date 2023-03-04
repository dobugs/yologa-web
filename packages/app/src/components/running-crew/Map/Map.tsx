import React from 'react';
import { wrap } from './style';
import { useGoogleMapApi } from '@common/map';
import { useRecoilValue } from 'recoil';
import { MapStore } from 'stores';

interface Props {
  api: typeof google;
}

function Map({ api }: Props) {
  const mapOptions = useRecoilValue(MapStore.mapOptionsState);
  const { createMap } = useGoogleMapApi(api, mapOptions);

  return <div ref={ref => ref && createMap(ref)} css={wrap}></div>;
}

export default Map;
