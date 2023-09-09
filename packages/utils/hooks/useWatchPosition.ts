import { useCallback, useEffect, useRef, useState } from 'react';

type GeolocationStatusType = 'watching' | 'not-allowed' | 'error' | 'loading' | 'unset';
type PositionType = {
  lat: number;
  lng: number;
};

const options: PositionOptions = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function useWatchPosition(watchId?: number | null) {
  const watchRef = useRef<number | null>(watchId ?? null);

  const [position, setPosition] = useState<PositionType | null>(null);
  const [status, setStatus] = useState<GeolocationStatusType>('unset');

  const handleSuccess: PositionCallback = useCallback(pos => {
    const { latitude, longitude } = pos.coords;

    setPosition({
      lat: latitude,
      lng: longitude,
    });

    setStatus('watching');
  }, []);

  const handleError: PositionErrorCallback = useCallback(err => {
    if (err.code === err.PERMISSION_DENIED) {
      setStatus('not-allowed');
    }

    setStatus('error');
  }, []);

  const watch = useCallback(() => {
    if (watchId) return;

    const id = navigator.geolocation.watchPosition(handleSuccess, handleError, options);
    watchRef.current = id;
  }, []);

  const stop = useCallback(() => {
    watchRef.current && navigator.geolocation.clearWatch(watchRef.current);
    watchId && navigator.geolocation.clearWatch(watchId);

    setStatus('unset');
  }, []);

  const getCurrentWatchId = () => watchRef.current;

  useEffect(() => {
    return stop;
  }, []);

  return {
    watch,
    status,
    position,
    stop,
    getCurrentWatchId,
  };
}

export type { GeolocationStatusType, PositionType };
export default useWatchPosition;
