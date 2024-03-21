import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { Element } from "react-scroll";
import { ProjectHeader, ProjectLinkBox, ProjectNav } from "@/components/project";
import { useWithProject } from "@/hooks";
import * as P from "./ProjectPage.styled";

const ProjectPage = () => {
  const { isModal, ...projectData } = useWithProject();
  const [headings, setHeadings] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();

  useEffect(() => {
    if (containerRef.current) {
      const elements = containerRef.current.querySelectorAll("h1, h2");
      const headingsList = Array.from(elements).map((el) => `${el.tagName}_${el.textContent}` || "");
      setHeadings(headingsList);
    }
  }, [pathname]);

  if (!projectData) {
    return <div>Loading...</div>;
  }

  return (
    <P.ProjectContainer>
      <ProjectHeader projectData={projectData} isModal={isModal} />
      <hr />
      <br />
      <ProjectNav isModal={isModal} headings={headings} />
      <P.ProjectInfo ref={containerRef}>
        <Element name="section1">
          <h1>배포 사이트</h1>
          <ProjectLinkBox projectData={projectData} />
        </Element>

        <Element name="section2">
          <h1>프로젝트 소개</h1>
          {projectData.intention && (
            <Element name="section3">
              <h2>기획 의도</h2>
              <p>{projectData.intention}</p>
            </Element>
          )}
          {projectData.architecture && (
            <Element name="section4">
              <h2>프로젝트 아키텍쳐</h2>
              <P.ArchitectureImg src={projectData.architecture} alt="프로젝트 아키텍쳐" />
            </Element>
          )}
        </Element>
      </P.ProjectInfo>
    </P.ProjectContainer>
  );
};

export default ProjectPage;
