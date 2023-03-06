import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { modalState } from 'stores/ui';
import { IModalState } from 'types/ui';

function useModal() {
  const location = useLocation();
  const [modals, setModal] = useRecoilState(modalState);
  const reset = useResetRecoilState(modalState);

  const add = (data: IModalState) => setModal(prev => [...prev, data]);
  const remove = () => setModal(prev => prev.slice(0, -1));

  useEffect(() => {
    reset();
  }, [location]);

  return {
    modals,
    add,
    remove,
  };
}

export default useModal;
