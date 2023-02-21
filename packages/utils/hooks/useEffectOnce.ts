import { useEffect, useRef } from 'react';

function useEffectOnce(callback: () => void, enabled = true) {
  const hasRunOnce = useRef(false);

  useEffect(() => {
    if (!hasRunOnce.current && enabled === true) {
      callback();
      hasRunOnce.current = true;
    }
  }, [enabled]);
}

export default useEffectOnce;
