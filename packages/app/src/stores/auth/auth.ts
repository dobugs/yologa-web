import { atom } from 'recoil';
import { IAuth } from 'types/auth';

const authState = atom<IAuth | null>({
  key: 'auth',
  default: null,
});

export { authState };
