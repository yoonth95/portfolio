import React from "react";
import { useNavigate } from "react-router-dom";
import { useModalStore } from "@/stores";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp, faUpRightAndDownLeftFromCenter, faXmark } from "@fortawesome/free-solid-svg-icons";
import * as M from "./ProjectModal.styled";
import { createPortal } from "react-dom";

interface ProjectModalProps {
  children: React.ReactNode;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ children }) => {
  const { setIsOpen, projectId, setProjectId } = useModalStore();
  const navigator = useNavigate();

  const moveLink = () => {
    navigator(`/project/${projectId}`);
    setIsOpen(false);
  };

  const movePrev = () => {
    setProjectId(1);
  };

  const moveNext = () => {
    setProjectId(2);
  };

  const closeModal = () => {
    setIsOpen(false);
    setProjectId(0);
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
            <M.ModalHeaderIcon onClick={movePrev}>
              <FontAwesomeIcon icon={faAngleUp} />
            </M.ModalHeaderIcon>
            <M.ModalHeaderIcon onClick={moveNext}>
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

export default ProjectModal;
