import { useContext } from 'react';
import { IMapContext } from 'types';
import { mapContext } from '../providers/MapProvider';

function useMapProvider(): IMapContext {
  const ctx = useContext(mapContext);

  if (!ctx) {
    throw Error('useMapProvider는 MapProvider 하위 컴포넌트에서만 사용할 수 있습니다.');
  }

  return ctx;
}

export default useMapProvider;
