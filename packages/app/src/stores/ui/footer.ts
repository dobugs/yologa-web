import { atom } from 'recoil';
import { IFooterState } from 'types/ui';

const footerState = atom<IFooterState>({
  key: 'footer',
  default: {
    isShow: false,
    activeNav: 'running-crews',
  },
});

export { footerState };
