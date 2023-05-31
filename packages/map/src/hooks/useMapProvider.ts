import { useContext } from 'react';
import { mapContext } from '../providers/MapProvider';

interface IReturn<T> {
  api: T;
  loaded: boolean;
}

function useMapProvider<T>(): IReturn<T> {
  const api = useContext(mapContext) as T;

  return {
    api,
    loaded: !!api,
  };
}

export default useMapProvider;
