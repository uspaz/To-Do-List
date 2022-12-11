import React from "react";
import "../styles/Modal.css";

const Modal = ({ children, isOpen, close }) => {
  const handleModalContainerClick = (e) => e.stopPropagation();

  return (
    <article className={`modal ${isOpen && "isOpen"}`} onClick={close}>
      <div className="modal-container" onClick={handleModalContainerClick}>
        {children}
      </div>
    </article>
  );
};

export default Modal;
