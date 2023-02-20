import { useEffect, useRef } from 'react';

function useEffectOnce(callback: () => void, enabled: boolean) {
  const hasRunOnce = useRef(false);

  useEffect(() => {
    if (!hasRunOnce.current && enabled) {
      callback();
      hasRunOnce.current = true;
    }
  }, [enabled]);
}

export default useEffectOnce;
