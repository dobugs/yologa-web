import { MapOptionsType } from 'types';
import { useCallback, useRef } from 'react';

function useGoogleMapApi(api: typeof google) {
  const mapRef = useRef<google.maps.Map | null>(null);

  const createMap = useCallback((el: HTMLDivElement, options: MapOptionsType) => {
    if (mapRef.current) return mapRef.current;

    mapRef.current = new api.maps.Map(el, {
      ...options,
      center: new api.maps.LatLng(options.center?.lat as number, options.center?.lng as number),
    });

    return mapRef.current;
  }, []);

  const handleChangePosition = useCallback((data: Partial<Pick<MapOptionsType, 'center' | 'zoom'>>) => {
    data.center && mapRef.current?.setCenter(data.center);
    data.zoom && mapRef.current?.setZoom(data?.zoom);
  }, []);

  return {
    createMap,
    handleChangePosition,
  };
}

export default useGoogleMapApi;
