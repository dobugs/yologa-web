import { atom } from 'recoil';
import { IAlertState } from 'types/ui';

const alertState = atom<IAlertState[]>({
  key: 'alert',
  default: [],
});

export { alertState };
