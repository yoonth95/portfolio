import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Element } from "react-scroll";
import { SafeHtml } from "@/components/common";
import { ProjectHeader, ProjectImgRender, ProjectImgSlide, ProjectLinkBox, ProjectNav } from "@/components/project";
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
      const headingsList = Array.from(elements).map((el) => `${el.id}_${el.tagName}_${el.textContent}` || "");
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
          <h1 id="section1">배포 사이트</h1>
          <ProjectLinkBox projectData={projectData} />
        </Element>
        <Element className="section" name="section2">
          <h1 id="section2">프로젝트 소개</h1>
          {projectData.intention && (
            <Element className="section" name="section3">
              <h2 id="section3">기획 의도 및 기술 선정</h2>
              <ul>
                {projectData.intention.map((item, index) => {
                  if (typeof item === "string") {
                    return (
                      <li key={index}>
                        <SafeHtml html={item} />
                      </li>
                    );
                  } else if (typeof item === "object") {
                    const [objectKey, objectValues] = Object.entries(item)[0];

                    return (
                      <li key={index}>
                        <SafeHtml html={objectKey} />
                        <ul>
                          {objectValues.map((value: string, valueIndex: number) => (
                            <li key={valueIndex} className="subLi">
                              {value}
                            </li>
                          ))}
                        </ul>
                      </li>
                    );
                  } else {
                    return null;
                  }
                })}
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
                    <P.ReferenceBox key={index}>
                      <strong>{text} : </strong>
                      <Link to={link} target="_blank">
                        {link}
                      </Link>
                    </P.ReferenceBox>
                  );
                })}
              </pre>
            </div>
          )}
          {projectData.duration && (
            <Element className="section" name="section4">
              <h2 id="section4">개발 기간</h2>
              <img src={projectData.duration} alt="프로젝트 개발 기간" />
            </Element>
          )}
          {projectData.architecture && (
            <Element className="section" name="section5">
              <h2 id="section5">프로젝트 아키텍쳐</h2>
              <img src={projectData.architecture} alt="프로젝트 아키텍쳐" />
            </Element>
          )}
          {projectData.figma && (
            <Element className="section" name="section6">
              <h2 id="section6">피그마 디자인</h2>
              {typeof projectData.figma === "string" ? (
                <img src={projectData.figma} alt="figma 이미지" />
              ) : (
                <ProjectImgSlide aspectRatio={projectData.projectImgAspectRatio}>
                  {projectData.figma.map((imgSrc, index) => (
                    <img key={index} src={imgSrc as string} alt={`프로젝트 피그마 ${index}`} />
                  ))}
                </ProjectImgSlide>
              )}
            </Element>
          )}
          {projectData.erd && (
            <Element className="section" name="section7">
              <h2 id="section7">데이터베이스 ERD</h2>
              <img src={projectData.erd} alt="erd 이미지" />
            </Element>
          )}
          {projectData.api && (
            <Element className="section" name="section8">
              <h2 id="section8">API 설계</h2>
              <img src={projectData.api} alt="api 이미지" />
            </Element>
          )}
        </Element>
        {projectData.responsibleRole && (
          <Element className="section" name="section9">
            <h1 id="section9">담당한 기능</h1>
            <ul>
              {projectData.responsibleRole.map((item, index) => (
                <li key={index}>
                  <SafeHtml html={item} />
                </li>
              ))}
            </ul>
          </Element>
        )}
        {projectData.troubleshooting && (
          <Element className="section" name="section10">
            <h1 id="section10">트러블슈팅</h1>
            <ul>
              {Object.entries(projectData.troubleshooting).map(([problem, solutions], index) => (
                <li key={index}>
                  <SafeHtml html={problem} />
                  <ul>
                    {solutions.map((solution: string, solutionIndex: number) => (
                      <li key={solutionIndex} className="subLi">
                        <SafeHtml html={solution} />
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </Element>
        )}
        <Element className="section" name="section11">
          <h1 id="section11">상세 이미지</h1>
          <ProjectImgRender projectData={projectData} />
        </Element>
      </P.ProjectInfo>
    </P.ProjectContainer>
  );
};

export default ProjectPage;
