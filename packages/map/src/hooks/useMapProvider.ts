import { useContext } from 'react';
import { mapContext } from '../providers/MapProvider';

interface IReturn {
  api: unknown;
  loaded: boolean;
}

function useMapProvider(): IReturn {
  const api = useContext(mapContext);

  return {
    api,
    loaded: !!api,
  };
}

export default useMapProvider;
