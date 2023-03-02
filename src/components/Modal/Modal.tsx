import { ReactNode } from "react";
import "./Modal.css";

interface ModalI {
  children: ReactNode;
  state: boolean;
  onClose: () => void;
}

function Modal({ children, onClose, state }: ModalI) {
  return (
    <div className={state ? "modal" : "modal disabled"} onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

export default Modal;
