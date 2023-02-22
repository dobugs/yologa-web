import { atom, selector } from 'recoil';
import { IAuth } from 'types/auth';

const _authState = atom<IAuth | null>({
  key: '_auth',
  default: null,
});

const authState = selector<IAuth | null>({
  key: 'auth',
  get: ({ get }) => get(_authState),
  set: ({ set }, newValue) => {
    window.localStorage.setItem('@yologa/auth', JSON.stringify(newValue));
    return set(_authState, newValue);
  },
});

export { authState };
