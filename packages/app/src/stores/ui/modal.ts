import { atom } from 'recoil';
import { IModalState } from 'types/ui';

const modalState = atom<IModalState[]>({
  key: 'modal',
  default: [],
});

export { modalState };
