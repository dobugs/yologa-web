import { IMarker, MapOptionsType } from 'types';
import { MutableRefObject, useCallback, useEffect, useRef } from 'react';
import { pipe } from '@common/utils';

interface IPosition {
  lat: number;
  lng: number;
}

interface GoogleMapOptions {
  currentPosition?: IPosition | null;
  center?: IPosition | null;
  onCenterChange: (data: IPosition) => void;
  onClickMarker: (id: IMarker['id']) => void;
}

function useGoogleMapApi(
  api: typeof google,
  { center, currentPosition, onCenterChange, onClickMarker }: GoogleMapOptions,
) {
  const mapRef = useRef<google.maps.Map | null>(null);
  const markerRef = useRef<Map<IMarker['id'], google.maps.Marker>>(new Map());

  const createMap = useCallback((el: HTMLDivElement, options: MapOptionsType) => {
    if (mapRef.current) return mapRef.current;

    mapRef.current = new api.maps.Map(el, {
      ...options,
      center: center
        ? new api.maps.LatLng(center.lat, center.lng)
        : new api.maps.LatLng(options.center.lat as number, options.center.lng as number),
    });

    mapRef.current.addListener('center_changed', () => {
      if (!mapRef.current) return;

      const { lat, lng } = mapRef.current.getCenter()!;
      onCenterChange({ lat: lat(), lng: lng() });
    });

    return mapRef.current;
  }, []);

  const handleChangePosition = useCallback((data: Partial<Pick<MapOptionsType, 'center' | 'zoom'>>) => {
    data.center && mapRef.current?.setCenter(data.center);
    data.zoom && mapRef.current?.setZoom(data?.zoom);
  }, []);

  useEffect(() => {
    if (currentPosition && !center) {
      handleChangePosition({ center: currentPosition });
    }
  }, [center, currentPosition]);

  const createMarker = ({ id, position: { lat, lng }, activated }: IMarker) => {
    if (markerRef.current.has(id)) return;

    const marker = new api.maps.Marker({
      position: new api.maps.LatLng(lat, lng),
      map: mapRef.current,
      title: String(id),
      animation: google.maps.Animation.DROP,
    });

    marker.addListener('click', () => {
      pipe(toggleBounce, centerSetter(mapRef), markerClickHandler(onClickMarker))(marker);
    });

    markerRef.current.set(id, marker);
  };

  return {
    createMap,
    handleChangePosition,
    getMap: () => mapRef.current,
    createMarker,
  };
}

function markerClickHandler(callback: (id: number) => void) {
  return (marker: google.maps.Marker) => {
    const id = Number(marker.getTitle());
    callback(id);
  };
}

function toggleBounce(marker: google.maps.Marker) {
  if (marker.getAnimation()) {
    marker.setAnimation(null);
    return;
  }

  marker.setAnimation(google.maps.Animation.BOUNCE);
  return marker;
}

function centerSetter(mapRef: MutableRefObject<google.maps.Map | null>) {
  return (marker: google.maps.Marker) => {
    const position = marker.getPosition();
    if (mapRef.current && position) {
      mapRef.current.panTo(position);
    }

    return marker;
  };
}

export default useGoogleMapApi;
