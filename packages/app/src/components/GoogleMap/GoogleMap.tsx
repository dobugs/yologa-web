import React, { useEffect, useRef } from 'react';
import { MapOptionsType, useGoogleMapApi, useMapProvider } from '@common/map';
import { map } from './style';
import type { IMarker, IPosition } from '@common/map';
import { searchState } from '../../stores/map';
import { useRecoilState } from 'recoil';
import { isEqual } from 'lodash';

interface Props {
  currentPosition: IPosition | null;
  markers: IMarker[];
}

const MAP_OPTIONS: MapOptionsType = {
  center: {
    lat: 37.498095,
    lng: 127.02761,
  },
  zoom: 13.5,
  clickableIcons: false,
  gestureHandling: 'greedy',
  minZoom: 11,
  maxZoom: 15,
  mapTypeControl: false,
  zoomControl: false,
  fullscreenControl: false,
  streetViewControl: false,
};

function GoogleMap({ currentPosition, markers }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { api } = useMapProvider<typeof google>();
  const [{ center }, setSearchState] = useRecoilState(searchState);

  const { createMap, handleChangePosition } = useGoogleMapApi(api, {
    currentPosition,
    center,
    onCenterChange: (center: IPosition) => {
      setSearchState(prev => ({ ...prev, isCurrent: isEqual(currentPosition, center), center }));
    },
    onClickMarker: (id: IMarker['id']) => {
      // TODO 마커 클릭 시 팝오버 필요
    },
  });

  useEffect(() => {
    if (containerRef.current) {
      createMap(containerRef.current, MAP_OPTIONS);
    }
  }, []);

  return <div ref={containerRef} css={map} />;
}

export type { Props };
export default GoogleMap;
