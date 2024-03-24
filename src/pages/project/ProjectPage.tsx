import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Element } from "react-scroll";
import { LazyImage } from "@/components/common";
import { ProjectHeader, ProjectImgSlide, ProjectLinkBox, ProjectNav } from "@/components/project";
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
              <h2>기획 의도 및 기술 선정</h2>
              <ul>
                {projectData.intention.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </Element>
          )}
          {projectData.reference && (
            <div className="section">
              <h3>참고 사이트</h3>
              <pre className="quotation">
                {projectData.reference.map((item, index) => {
                  const [text, link] = item.split(" : ");
                  return (
                    <P.ReferenceBox>
                      <strong>{text} : </strong>
                      <Link key={index} to={link} target="_blank">
                        {link}
                      </Link>
                    </P.ReferenceBox>
                  );
                })}
              </pre>
            </div>
          )}
          {projectData.architecture && (
            <Element className="section" name="section3">
              <h2>프로젝트 아키텍쳐</h2>
              <LazyImage src={projectData.architecture} alt="프로젝트 아키텍쳐" />
            </Element>
          )}
          {projectData.figma && (
            <Element className="section" name="section4">
              <h2>피그마 디자인</h2>
              {/* <P.ArchitectureImg src={projectData.architecture} alt="프로젝트 아키텍쳐" /> */}
            </Element>
          )}
          {projectData.erd && (
            <Element className="section" name="section5">
              <h2>데이터베이스 ERD</h2>
              <LazyImage src={projectData.erd} alt="erd 이미지" />
            </Element>
          )}
          {projectData.api && (
            <Element className="section" name="section6">
              <h2>API 설계</h2>
              <LazyImage src={projectData.api} alt="api 이미지" />
            </Element>
          )}
        </Element>
        {projectData.responsibleRole && (
          <Element className="section" name="section7">
            <h1>담당한 기능</h1>
            {/* <ProjectLinkBox projectData={projectData} /> */}
          </Element>
        )}
        {projectData.troubleshooting && (
          <Element className="section" name="section8">
            <h1>트러블슈팅</h1>
            {/* <ProjectLinkBox projectData={projectData} /> */}
          </Element>
        )}
        <Element className="section" name="section9">
          <h1>상세 이미지</h1>
          <ProjectImgSlide>
            {projectData.projectImgList.map((item, index) => (
              <img key={index} src={item} alt="프로젝트 이미지" />
            ))}
          </ProjectImgSlide>
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
