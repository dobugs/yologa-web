import { atom } from 'recoil';
import { IModalState } from 'types/ui';

const alertState = atom<IModalState>({
  key: 'alert',
  default: {
    loading: false,
    isOpen: false,
    content: '',
  },
});

export { alertState };
