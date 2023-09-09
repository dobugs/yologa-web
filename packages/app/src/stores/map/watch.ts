import { atom } from 'recoil';
import { IWatch } from 'types/map';

const watchState = atom<IWatch>({
  key: 'watch',
  default: {
    status: 'unset',
    position: null,
  },
});

export { watchState };
