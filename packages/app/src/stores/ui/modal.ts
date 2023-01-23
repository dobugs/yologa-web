import { atom } from 'recoil';
import { IModalState } from 'types/ui';

const modalState = atom<IModalState>({
  key: 'modal',
  default: {
    loading: false,
    isOpen: false,
    content: '',
  },
});

export { modalState };
