import { ReactNode, useMemo } from 'react';
import { toast, ToastOptions } from 'react-toastify';

function useToastMessage(options?: Partial<ToastOptions>) {
  const option: ToastOptions = {
    position: 'bottom-center',
    autoClose: 1_000,
    hideProgressBar: true,
    draggable: true,
    progress: 0,
    theme: 'colored',
    closeButton: false,
    style: {
      fontSize: 14,
      bottom: 64,
      minHeight: 36,
      maxWidth: 320,
      width: '80%',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    ...(options && { ...options }),
  };

  const toastMessage = useMemo(
    () => ({
      success: (message: ReactNode) => toast.success(message, option),
      error: (message: ReactNode) => toast.error(message, option),
      info: (message: ReactNode) => toast.info(message, option),
    }),
    [options],
  );

  return toastMessage;
}

export default useToastMessage;
