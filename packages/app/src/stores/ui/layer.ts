import { atom } from 'recoil';
import { ILayerState } from 'types/ui';

const layerState = atom<ILayerState[]>({
  key: 'layer',
  default: [],
});

export { layerState };
