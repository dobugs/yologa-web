import { userBase } from './';
import { IProfile } from 'types/member';

const PATH = '/api/v1';

const getMe = () => {
  const path = `${PATH}/members/me`;
  return userBase.get<IProfile>(path);
};

const updateMe = (payload: Pick<IProfile, 'nickname' | 'phoneNumber'>) => {
  const path = `${PATH}/members`;
  return userBase.post<unknown>(path, payload);
};

const updateImage = (payload: FormData) => {
  const path = `${PATH}/members/profile`;
  return userBase.post<unknown>(path, payload, {
    headers: {
      'Content-Type': 'multiplart/form-data',
    },
  });
};

export { getMe, updateMe, updateImage };
