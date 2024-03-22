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
        <Element className="section" name="section1">
          <h1>프로젝트 소개</h1>
          {projectData.intention && (
            <Element className="section" name="section2">
              <h2>기획 의도</h2>
              <p>{projectData.intention}</p>
            </Element>
          )}
          {projectData.architecture && (
            <Element className="section" name="section3">
              <h2>프로젝트 아키텍쳐</h2>
              <img src={projectData.architecture} alt="프로젝트 아키텍쳐" />
            </Element>
          )}
          <Element className="section" name="section4">
            <h2>기술 선정 이유</h2>
            {/* <P.ArchitectureImg src={projectData.architecture} alt="프로젝트 아키텍쳐" /> */}
          </Element>
          <Element className="section" name="section5">
            <h2>피그마/디자인</h2>
            {/* <P.ArchitectureImg src={projectData.architecture} alt="프로젝트 아키텍쳐" /> */}
          </Element>
          <Element className="section" name="section6">
            <h2>API / ERP 설계</h2>
            {/* <P.ArchitectureImg src={projectData.architecture} alt="프로젝트 아키텍쳐" /> */}
          </Element>
        </Element>
        <Element className="section" name="section7">
          <h1>담당한 기능</h1>
          {/* <ProjectLinkBox projectData={projectData} /> */}
        </Element>
        <Element className="section" name="section8">
          <h1>트러블슈팅</h1>
          {/* <ProjectLinkBox projectData={projectData} /> */}
        </Element>
        <Element className="section" name="section9">
          <h1>상세 이미지</h1>
          {/* <ProjectLinkBox projectData={projectData} /> */}
        </Element>
        <Element className="section" name="section10">
          <h1>배포 사이트</h1>
          <ProjectLinkBox projectData={projectData} />
        </Element>
      </P.ProjectInfo>
    </P.ProjectContainer>
  );
};

export default ProjectPage;
