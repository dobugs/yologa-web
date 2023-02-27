import React from 'react';

import { useVh } from 'hooks';
import { Outlet } from 'react-router-dom';
import Portal from './Portal';
import { Alert, Background, Modal } from 'components/common';
import useModal from 'hooks/useModal';
import useAlert from 'hooks/useAlert';

function Base() {
  useVh();
  const { modals, remove: removeModal } = useModal();
  const { alerts, remove: removeAlert } = useAlert();

  return (
    <>
      <Outlet />
      <Portal>
        {modals.map((m, idx) => (
          <Background key={idx}>
            <Modal title={m.title} handleClose={() => removeModal()}>
              {m.content}
            </Modal>
          </Background>
        ))}

        {alerts.map((m, idx) => (
          <Background key={idx}>
            <Alert onClose={removeAlert}>{m.content}</Alert>
          </Background>
        ))}
      </Portal>
    </>
  );
}

export default Base;
