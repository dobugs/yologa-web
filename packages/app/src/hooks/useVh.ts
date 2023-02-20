import { useEffect, useState } from 'react';

const setVh = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};

function useVh() {
  const [, setRefreshCnt] = useState(0);

  const resizeCallback = () => {
    setVh();
    setRefreshCnt(cnt => cnt + 1);
  };

  useEffect(() => {
    setVh();
    window.addEventListener('resize', resizeCallback);

    return () => {
      window.removeEventListener('resize', resizeCallback);
    };
  }, []);
}

export default useVh;
