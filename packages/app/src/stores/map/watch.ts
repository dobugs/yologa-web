import { atom } from 'recoil';
import { IWatch } from 'types/map';

const watchState = atom<IWatch>({
  key: 'watch',
  default: {
    watchId: null,
    status: 'unset',
    position: null,
  },
});

export { watchState };
