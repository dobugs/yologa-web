import { useEffect } from 'react';

const setVh = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};

function useVh() {
  useEffect(() => {
    setVh();
    window.addEventListener('resive', setVh);

    return () => {
      window.removeEventListener('resize', setVh);
    };
  }, []);
}

export default useVh;
