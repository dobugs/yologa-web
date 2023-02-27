import { useRecoilState } from 'recoil';
import { modalState } from 'stores/ui';
import { IModalState } from 'types/ui';

function useModal() {
  const [modals, setModal] = useRecoilState(modalState);

  const add = (data: IModalState) => setModal(prev => [...prev, data]);
  const remove = () => setModal(prev => prev.slice(0, -1));

  return {
    modals,
    add,
    remove,
  };
}

export default useModal;
