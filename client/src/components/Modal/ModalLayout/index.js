import { useRef } from "react";

import ModalFooter from "../ModalFooter";

import "./style.scss";

const ModalLayout = ({ toggleModal, item, cartIndex, isEdit, children }) => {
  const modalRef = useRef();

  const handleClickOutside = (e) => {
    if (modalRef.current === e.target) {
      toggleModal();
    }
  };

  return (
    <div className="modal__wrapper" ref={modalRef} onClick={handleClickOutside}>
      <div className="modal__container">
        <section className="modal__content">{children}</section>
        <ModalFooter {...{ toggleModal, item, cartIndex, isEdit }} />
      </div>
    </div>
  );
};

export default ModalLayout;
