import { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

function Portal({ children }: PropsWithChildren) {
  return createPortal(children, document.getElementById('modal') as HTMLElement);
}

export default Portal;
