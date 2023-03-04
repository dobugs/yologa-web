import { useRecoilState } from 'recoil';
import { alertState } from 'stores/ui';
import { IAlertState } from 'types/ui';

function useAlert() {
  const [alerts, setAlert] = useRecoilState(alertState);

  const add = (data: IAlertState) => setAlert(prev => [...prev, data]);
  const remove = () => setAlert(prev => prev.slice(0, -1));

  return {
    alerts,
    add,
    remove,
  };
}

export default useAlert;
