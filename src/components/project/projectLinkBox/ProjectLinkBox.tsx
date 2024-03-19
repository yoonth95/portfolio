import React from "react";
import { ProjectListType } from "@/types";
import { LazyImage } from "@/components/common";
import * as PLB from "./ProjectLinkBox.styled";

interface ProjectLinkBoxProps {
  projectData: Partial<ProjectListType>;
}

const ProjectLinkBox: React.FC<ProjectLinkBoxProps> = ({ projectData }) => {
  return (
    <PLB.ProjectLinkBoxContainer>
      <PLB.BoxLeft>
        <PLB.BoxTitle>{projectData.title}</PLB.BoxTitle>
        <PLB.BoxInfo>{projectData.introduction}</PLB.BoxInfo>
        <PLB.BoxLink>
          <img src={projectData.icon} alt="아이콘" />
          <span>{projectData.siteLink}</span>
        </PLB.BoxLink>
      </PLB.BoxLeft>
      <PLB.BoxRight>
        <LazyImage src={projectData.projectMainImg as string} alt={"메인이미지"} />
      </PLB.BoxRight>
    </PLB.ProjectLinkBoxContainer>
  );
};

export default ProjectLinkBox;
