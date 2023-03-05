import { atom } from 'recoil';
import { ISearch } from 'types/map';

const searchState = atom<ISearch>({
  key: 'search',
  default: {
    center: null,
    value: '',
    isCurrent: false,
  },
});

export { searchState };
