import React from "react";
import { useNavigate } from "react-router-dom";
import { useModalStore } from "@/stores";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp, faUpRightAndDownLeftFromCenter, faXmark } from "@fortawesome/free-solid-svg-icons";
import * as M from "./Modal.styled";
import { createPortal } from "react-dom";

interface ModalProps {
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children }) => {
  const { setIsOpen, dataName, setDataName } = useModalStore();
  const navigator = useNavigate();

  const moveLink = () => {
    navigator(`/project/${dataName}`);
    setIsOpen(false);
  };

  const closeModal = () => {
    setIsOpen(false);
    setDataName("");
  };

  const renderModal = (
    <>
      <M.ModalContainer>
        <M.ModalHeader>
          <M.ModalHeaderLeft>
            <M.ModalHeaderIcon onClick={moveLink}>
              <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} style={{ transform: "rotate(90deg)" }} />
            </M.ModalHeaderIcon>
            <M.ModalHeaderLine></M.ModalHeaderLine>
            <M.ModalHeaderIcon>
              <FontAwesomeIcon icon={faAngleUp} />
            </M.ModalHeaderIcon>
            <M.ModalHeaderIcon>
              <FontAwesomeIcon icon={faAngleDown} />
            </M.ModalHeaderIcon>
          </M.ModalHeaderLeft>
          <M.ModalHeaderIcon onClick={closeModal}>
            <FontAwesomeIcon icon={faXmark} />
          </M.ModalHeaderIcon>
        </M.ModalHeader>
        {children}
      </M.ModalContainer>
      <M.Overlay onClick={closeModal}></M.Overlay>
    </>
  );

  const rootElement = document.getElementById("root");
  if (!rootElement) {
    console.error("Root element with ID 'root' not found.");
    return null;
  }

  return createPortal(renderModal, rootElement);
};

export default Modal;
