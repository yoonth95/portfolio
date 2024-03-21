import { useEffect, useRef, useState } from "react";
import { Element } from "react-scroll";
import { ProjectHeader, ProjectLinkBox, ProjectNav } from "@/components/project";
import { useWithProject } from "@/hooks";
import * as P from "./ProjectPage.styled";

const ProjectPage = () => {
  const { isModal, ...projectData } = useWithProject();
  const [headings, setHeadings] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const h1Elements = containerRef.current.querySelectorAll("h1");
      const headingsList = Array.from(h1Elements).map((h1) => h1.textContent || "");
      setHeadings(headingsList);
    }
  }, []);

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
          <P.H1>배포 사이트</P.H1>
          <ProjectLinkBox projectData={projectData} />
        </Element>

        <Element name="section2">
          {/* <P.H1>배포 사이트</P.H1> */}
          {/* <ProjectLinkBox projectData={projectData} /> */}
        </Element>

        <Element name="section3">
          {/* <P.H1>배포 사이트</P.H1> */}
          {/* <ProjectLinkBox projectData={projectData} /> */}
        </Element>

        <Element name="section4">
          {/* <P.H1>배포 사이트</P.H1> */}
          {/* <ProjectLinkBox projectData={projectData} /> */}
        </Element>

        <Element name="section5">
          {/* <P.H1>배포 사이트</P.H1> */}
          {/* <ProjectLinkBox projectData={projectData} /> */}
        </Element>
      </P.ProjectInfo>
    </P.ProjectContainer>
  );
};

export default ProjectPage;
