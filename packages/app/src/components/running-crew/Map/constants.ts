import { GeolocationStatusType } from '@common/utils/hooks';
import React from 'react';

const GEOLOCATION_STATUS_MESSAGE: Partial<Record<GeolocationStatusType, React.ReactNode>> = {
  error: '현재 위치를 알 수 없습니다. 🥲',
  loading: '현재 위치를 받아오는 중입니다. 🏃🏻',
  'not-allowed': '설정에서 위치 접근을 허용해주세요',
};

export { GEOLOCATION_STATUS_MESSAGE };
