import useToastMessage from 'hooks/useToastMessage';
import { useCallback } from 'react';

function useLogout() {
  const toast = useToastMessage();

  const handleLogout = useCallback(() => {
    toast.info('로그아웃됩니다.');
    window.localStorage.removeItem('@yologa/auth');

    setTimeout(() => {
      window.location.href = '/';
    }, 500);
  }, []);

  return {
    handleLogout,
  };
}

export default useLogout;
