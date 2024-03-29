import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import { logEvent } from "@firebase/analytics";
import { analytics } from "@/firebase/firebaseInit";
import { useModalStore } from "@/stores";
import { projectList } from "@/data/projectList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp, faUpRightAndDownLeftFromCenter, faXmark } from "@fortawesome/free-solid-svg-icons";
import * as M from "./ProjectModal.styled";

interface ProjectModalProps {
  children: React.ReactNode;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ children }) => {
  const { isOpen, setIsOpen, projectId, setProjectId } = useModalStore();
  const navigator = useNavigate();
  const ref = useRef<HTMLDivElement>(null);

  // 페이지로 이동
  const moveLink = () => {
    logEvent(analytics, `/project/${projectId}`);
    navigator(`/project/${projectId}`);
    setIsOpen(false);
  };

  // 이전 프로젝트
  const movePrev = () => {
    projectId > 1 && setProjectId(projectId - 1);
  };

  // 다음 프로젝트
  const moveNext = () => {
    projectId < projectList.length && setProjectId(projectId + 1);
  };

  // 닫기
  const closeModal = () => {
    setIsOpen(false);
    setProjectId(0);
  };

  // 맨 처음, 끝 페이지 시에 버튼 동적 스타일 적용
  const calculateStyle = (isActive: boolean) => {
    return {
      color: isActive ? "#37352f73" : "#37352f29",
      cursor: isActive ? "pointer" : "default",
    };
  };

  // 프로젝트 이동 시 스크롤 맨 위로
  useEffect(() => {
    if (ref.current) {
      logEvent(analytics, `/project/${projectId}`);
      ref.current.scrollTo(0, 0);
    }
  }, [projectId, ref]);

  // 모달 여부에 따른 body overflow 스타일 변경
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "hidden auto";
    };
  }, [isOpen]);

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
        <M.ModalContent ref={ref}>{children}</M.ModalContent>
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
