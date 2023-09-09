import { userBase, yologaBase } from 'api';
import { atom, selector, DefaultValue } from 'recoil';
import { IAuth } from 'types/auth';

const setGlobalToken = (data: IAuth) => {
  window.localStorage.setItem('@yologa/auth', JSON.stringify(data));
  userBase.defaults.headers.common['authorization'] = `Bearer ${data.accessToken}`;
  yologaBase.defaults.headers.common['authorization'] = `Bearer ${data.accessToken}`;
};

const _authState = atom<IAuth>({
  key: '_auth',
  default: {
    accessToken: '',
    refreshToken: '',
  },
});

const authState = selector<IAuth>({
  key: 'auth',
  get: ({ get }) => get(_authState),
  set: ({ set, reset }, newValue) => {
    if (newValue instanceof DefaultValue) {
      reset(authState);
      return;
    }

    if (newValue) {
      setGlobalToken(newValue);
      set(_authState, newValue);
    }
  },
});

const isAuth = selector<boolean>({
  key: 'isAuth',
  get: ({ get }) => !!get(_authState).accessToken,
});

export { authState, isAuth };
