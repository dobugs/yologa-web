import { atom } from 'recoil';
import { IHeaderState } from 'types/ui';

const headerState = atom<IHeaderState>({
  key: 'header',
  default: {
    isShow: false,
    type: 'default',
  },
});

export { headerState };
