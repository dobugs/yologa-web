import { userBase } from './';
import { IProfile } from 'types/member';

const PATH = '/api/v1';

const getMe = () => {
  const path = `${PATH}/members/me`;
  return userBase.get<IProfile>(path);
};

export { getMe };
