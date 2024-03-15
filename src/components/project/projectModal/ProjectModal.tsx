import React from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import { useModalStore } from "@/stores";
import { projectList } from "@/data/projectList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp, faUpRightAndDownLeftFromCenter, faXmark } from "@fortawesome/free-solid-svg-icons";
import * as M from "./ProjectModal.styled";

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
    projectId > 1 && setProjectId(projectId - 1);
  };

  const moveNext = () => {
    projectId < projectList.length && setProjectId(projectId + 1);
  };

  const closeModal = () => {
    setIsOpen(false);
    setProjectId(0);
  };

  const calculateStyle = (isActive: boolean) => {
    return {
      color: isActive ? "#37352f73" : "#37352f29",
      cursor: isActive ? "pointer" : "default",
    };
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
            <M.ModalHeaderIcon onClick={movePrev} style={calculateStyle(projectId > 1)}>
              <FontAwesomeIcon icon={faAngleUp} />
            </M.ModalHeaderIcon>
            <M.ModalHeaderIcon onClick={moveNext} style={calculateStyle(projectId < projectList.length)}>
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
