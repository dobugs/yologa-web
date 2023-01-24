import { atom } from 'recoil';
import { INavState } from 'types/ui';

const navState = atom<INavState>({
  key: 'nav',
  default: {
    isShow: false,
    activeNav: 'running-crews',
  },
});

export { navState };
