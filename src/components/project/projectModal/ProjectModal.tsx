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
  const { isOpen, setIsOpen, projectName, setProject } = useModalStore();
  const navigator = useNavigate();
  const ref = useRef<HTMLDivElement>(null);

  // 현재 프로젝트의 인덱스 찾기
  const currentProjectIndex = projectList.findIndex((project) => project.projectName === projectName);

  // 페이지로 이동
  const moveLink = () => {
    logEvent(analytics, `/project/${projectName}`);
    navigator(`/project/${projectName}`);
    setIsOpen(false);
  };

  // 이전 프로젝트
  const movePrev = () => {
    if (currentProjectIndex > 0) {
      const newProject = projectList[currentProjectIndex - 1];
      setProject(newProject.projectName);
    }
  };

  // 다음 프로젝트
  const moveNext = () => {
    if (currentProjectIndex < projectList.length - 1) {
      const newProject = projectList[currentProjectIndex + 1];
      setProject(newProject.projectName);
    }
  };

  // 닫기
  const closeModal = () => {
    setIsOpen(false);
    setProject(""); // Modal을 닫을 때 projectName을 빈 문자열로 설정
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
      logEvent(analytics, `/project/${projectName}`);
      ref.current.scrollTo(0, 0);
    }
  }, [projectName, ref]);

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
            <M.ModalHeaderIcon onClick={movePrev} style={calculateStyle(currentProjectIndex > 0)}>
              <FontAwesomeIcon icon={faAngleUp} />
            </M.ModalHeaderIcon>
            <M.ModalHeaderIcon onClick={moveNext} style={calculateStyle(currentProjectIndex < projectList.length - 1)}>
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
