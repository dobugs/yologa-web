import { useRecoilState } from 'recoil';
import { alertState } from 'stores/ui';
import { IModalState } from 'types/ui';

function useModal() {
  const [alerts, setAlert] = useRecoilState(alertState);

  const add = (data: IModalState) => setAlert(prev => [...prev, data]);
  const remove = () => setAlert(prev => prev.slice(0, -1));

  return {
    alerts,
    add,
    remove,
  };
}

export default useModal;
