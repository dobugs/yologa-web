import React, { ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Props {
  children: ReactNode;
}

function ToastProvider({ children }: Props) {
  return (
    <>
      {children}
      <ToastContainer />
    </>
  );
}

export default ToastProvider;
