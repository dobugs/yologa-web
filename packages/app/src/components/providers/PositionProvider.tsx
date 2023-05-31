import React, { PropsWithChildren, useContext, useMemo, useRef, useState } from 'react';
import { IPosition } from '../../types/map';

type GeolocationStatusType = 'watching' | 'not-allowed' | 'error' | 'loading' | 'unset';
interface YologaPosition {
  watch: (callback: (data: IPosition) => void) => void;
  clear: () => void;
  status: GeolocationStatusType;
}

const positionContext = React.createContext<YologaPosition | null>(null);

function PositionProvider({ children }: PropsWithChildren) {
  const [status, setStatus] = useState<GeolocationStatusType>('unset');
  const watchId = useRef<number | null>(null);

  return (
    <positionContext.Provider
      value={useMemo(
        () => ({
          watch(callback: (coords: IPosition) => void) {
            watchId.current = navigator.geolocation.watchPosition(
              pos => {
                const { latitude: lat, longitude: lng } = pos.coords;

                setStatus('watching');
                callback({ lat, lng });
              },
              err => {
                if (err.code === err.PERMISSION_DENIED) {
                  setStatus('not-allowed');
                  return;
                }

                setStatus('error');
              },
              {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0,
              },
            );
          },
          clear() {
            if (watchId.current) {
              navigator.geolocation.clearWatch(watchId.current);
              watchId.current = null;
            }
          },
          status,
        }),
        [status],
      )}
    >
      {children}
    </positionContext.Provider>
  );
}

function usePosition() {
  const ctx = useContext(positionContext);

  if (!ctx) throw Error('usePosition not available');

  return ctx;
}

export { usePosition };
export default PositionProvider;
