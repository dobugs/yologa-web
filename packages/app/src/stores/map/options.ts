import { atom } from 'recoil';

const mapOptionsState = atom<google.maps.MapOptions>({
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

export { mapOptionsState };
