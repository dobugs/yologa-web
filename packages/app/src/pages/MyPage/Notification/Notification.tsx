import useAlert from 'hooks/useAlert';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Notification() {
  const naviate = useNavigate();
  const { add } = useAlert();

  useEffect(() => {
    add({
      content: '서비스 준비중입니다.',
    });

    naviate(-1);
  }, []);

  return null;
}

export default Notification;
