import { atom, DefaultValue, selector } from 'recoil';
import { MapOptionsType } from '@common/map';

const mapOptionsState = atom<MapOptionsType>({
  key: 'mapOptions',
  default: {
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
  },
});

const mapOptionsPosition = selector<Pick<MapOptionsType, 'center' | 'zoom'>>({
  key: 'mapOptionsCenterZoom',
  get: ({ get }) => {
    const state = get(mapOptionsState);
    return {
      center: state.center,
      zoom: state.zoom,
    };
  },
  set: ({ set, reset }, newValue) => {
    if (newValue instanceof DefaultValue) {
      reset(mapOptionsState);
      return;
    }

    set(mapOptionsState, {
      center: newValue.center,
      zoom: newValue.zoom,
    });
  },
});

export { mapOptionsState, mapOptionsPosition };
