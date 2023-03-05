import React from 'react';

import { useVh } from 'hooks';
import { Outlet } from 'react-router-dom';
import Portal from './Portal';
import { Alert, Background, Layer, Modal, Blur } from 'components/common';
import useModal from 'hooks/useModal';
import useAlert from 'hooks/useAlert';
import useLayer from 'hooks/useLayer';

function Base() {
  useVh();
  const { modals, remove: removeModal } = useModal();
  const { alerts, remove: removeAlert } = useAlert();
  const { layers, remove: removeLayer } = useLayer();

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

        {layers.map((m, idx) => (
          <Blur key={idx}>
            <Layer
              onClose={() => {
                m.onClose?.();
                removeLayer();
              }}
              close={m.close}
            >
              {m.content}
            </Layer>
          </Blur>
        ))}
      </Portal>
    </>
  );
}

export default Base;
