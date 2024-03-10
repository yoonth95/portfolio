import React from "react";
import { ProjectBox } from "@/components/project";
import { projectList } from "@/data/sidebarInfo";
import { desktopGif } from "@/assets/images";
import * as P from "./ProjectPage.styled";

const ProjectPage = () => {
  return (
    <P.ProjectContainer>
      <section>
        <P.ProjectTitle>
          <img src={desktopGif} alt="트로피gif" />
          <h2>프로젝트</h2>
        </P.ProjectTitle>
        <hr />
        <P.ProjectBoxList>
          {projectList
            .map((item) => item.projects)
            .flat()
            .map((item, index) => (
              <ProjectBox key={index} data={item} />
            ))}
        </P.ProjectBoxList>
      </section>
    </P.ProjectContainer>
  );
};

export default ProjectPage;
