import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Element } from "react-scroll";
import { SafeHtml } from "@/components/common";
import { ProjectHeader, ProjectImgRender, ProjectPropulsionRender, ProjectImgSlide, ProjectLinkBox, ProjectNav } from "@/components/project";
import { useResize, useWithProject } from "@/hooks";
import * as P from "./ProjectPage.styled";

const ProjectPage = () => {
  const [zoom, setZoom] = useState(1);
  const [headings, setHeadings] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();
  const { isModal, ...projectData } = useWithProject();

  useResize({ maxWidth: 550, setZoom });

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
    <P.ProjectContainer style={{ zoom: zoom }}>
      <ProjectHeader projectData={projectData} isModal={isModal} />
      <hr />
      <br />
      <ProjectNav isModal={isModal} headings={headings} />
      <P.ProjectInfo ref={containerRef}>
        {projectData.siteLink && (
          <Element className="section" name="sectionLink">
            <h1 id="sectionLink">배포 사이트</h1>
            <ProjectLinkBox
              siteLink={projectData.siteLink}
              title={projectData.title}
              introduction={projectData.introduction}
              icon={projectData.icon}
              projectMainImg={projectData.projectMainImg}
            />
          </Element>
        )}

        <Element className="section" name="sectionIntro">
          <h1 id="sectionIntro">프로젝트 소개</h1>
          {/* 추친 배경 */}
          {projectData.projectPropulsion && (
            <Element className="section" name="sectionPropulsion">
              <h2 id="sectionPropulsion">추진 배경</h2>
              <ProjectPropulsionRender propulsionData={projectData.projectPropulsion} />
            </Element>
          )}

          {/* 기획 의도 및 기술 선정 */}
          {projectData.intention && (
            <Element className="section" name="sectionIntention">
              {projectData.projectIntroImg ? (
                <>
                  <h2 id="sectionIntention">기획 의도 및 기술 선정</h2>
                  {projectData.projectIntroImg && <img src={projectData.projectIntroImg} alt="프로젝트 인트로 이미지" style={{ width: "100%" }} />}
                </>
              ) : (
                <h2 id="sectionIntention">구현 목표</h2>
              )}

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
                              <SafeHtml html={value} />
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

          {/* 참고 사이트 */}
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

          {/* 프로젝트 기간 */}
          {projectData.duration && (
            <Element className="section" name="sectionDuration">
              <h2 id="sectionDuration">개발 기간</h2>
              <img src={projectData.duration} alt="프로젝트 개발 기간" />
            </Element>
          )}

          {/* 프로젝트 아키텍처 */}
          {projectData.architecture && (
            <Element className="section" name="sectionArchitect">
              <h2 id="sectionArchitect">프로젝트 아키텍쳐</h2>
              <img src={projectData.architecture} alt="프로젝트 아키텍쳐" />
            </Element>
          )}

          {/* 프로젝트 피그마 */}
          {projectData.figma && (
            <Element className="section" name="sectionFigma">
              <h2 id="sectionFigma">피그마 디자인</h2>
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

          {/* 프로젝트 ERD */}
          {projectData.erd && (
            <Element className="section" name="sectionDatabase">
              <h2 id="sectionDatabase">데이터베이스 ERD</h2>
              <img src={projectData.erd} alt="erd 이미지" />
            </Element>
          )}

          {/* 프로젝트 API */}
          {projectData.api && (
            <Element className="section" name="sectionAPI">
              <h2 id="sectionAPI">API 설계</h2>
              {typeof projectData.api === "string" ? (
                <img src={projectData.api} alt="api 이미지" />
              ) : (
                <ProjectImgSlide aspectRatio={projectData.projectImgAspectRatio}>
                  {projectData.api.map((imgSrc, index) => (
                    <img key={index} src={imgSrc as string} alt={`프로젝트 api 이미지 ${index}`} />
                  ))}
                </ProjectImgSlide>
              )}
            </Element>
          )}
        </Element>

        {/* 프로젝트 담당 기능 */}
        {projectData.responsibleRole && (
          <Element className="section" name="sectionFeature">
            <h1 id="sectionFeature">담당한 기능</h1>
            <ul>
              {projectData.responsibleRole.map((item, index) => (
                <li key={index}>
                  <SafeHtml html={item} />
                </li>
              ))}
            </ul>
          </Element>
        )}

        {/* 프로젝트 트러블슈팅 */}
        {projectData.troubleshooting && (
          <Element className="section" name="sectionTrouble">
            <h1 id="sectionTrouble">트러블슈팅</h1>
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

        {/* 프로젝트 상세 이미지 */}
        <Element className="section" name="sectionDetailImage">
          <h1 id="sectionDetailImage">핵심 기능 및 상세 이미지</h1>
          <ProjectImgRender projectData={projectData} />
        </Element>
      </P.ProjectInfo>
    </P.ProjectContainer>
  );
};

export default ProjectPage;
