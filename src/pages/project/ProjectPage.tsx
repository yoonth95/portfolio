import React from "react";
import { ProjectHeader, ProjectLinkBox } from "@/components/project";
import { useWithProject } from "@/hooks";
import * as P from "./ProjectPage.styled";

const ProjectPage = () => {
  const { isModal, ...projectData } = useWithProject();

  if (!projectData) {
    return <div>Loading...</div>;
  }

  return (
    <P.ProjectContainer>
      <ProjectHeader projectData={projectData} />
      <hr />
      <br />
      <P.H1>배포 사이트</P.H1>
      <ProjectLinkBox projectData={projectData} />
    </P.ProjectContainer>
  );
};

export default ProjectPage;
