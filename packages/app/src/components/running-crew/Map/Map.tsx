import React, { useEffect } from 'react';
import GoogleMap from 'components/GoogleMap';
import { wrap } from './style';
import { useRecoilState } from 'recoil';
import { MapStore } from 'stores';
import { useMapProvider } from '@common/map/src';
import { useEffectOnce, useWatchPosition } from '@common/utils/hooks';
import { GEOLOCATION_STATUS_MESSAGE } from 'components/running-crew/Map/constants';
import useToastMessage from 'hooks/useToastMessage';

function Map() {
  const toast = useToastMessage();
  const { api } = useMapProvider();
  const [watcher, setWatcher] = useRecoilState(MapStore.watchState);
  const { status, position, watch, stop, getCurrentWatchId } = useWatchPosition(watcher.watchId);

  useEffect(() => {
    GEOLOCATION_STATUS_MESSAGE[status] && toast.info(GEOLOCATION_STATUS_MESSAGE[status]);
  }, [status]);

  useEffect(() => {
    setWatcher(prev => ({ ...prev, position, status }));
  }, [status, position]);

  useEffectOnce(() => {
    watch();
    setWatcher(prev => ({ ...prev, watchId: getCurrentWatchId() }));
  });

  return (
    <div css={wrap}>
      <GoogleMap api={api as typeof google} currentPosition={watcher.position} />
    </div>
  );
}

export default Map;
