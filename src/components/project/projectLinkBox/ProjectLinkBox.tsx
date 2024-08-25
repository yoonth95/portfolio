import React from "react";
import { ProjectListType } from "@/types";
import { LazyImage } from "@/components/common";
import * as PLB from "./ProjectLinkBox.styled";

type ProjectLinkBoxProps = Pick<ProjectListType, "siteLink" | "title" | "introduction" | "icon" | "projectMainImg">;

const ProjectLinkBox: React.FC<ProjectLinkBoxProps> = ({ siteLink, title, introduction, icon, projectMainImg }) => {
  return (
    <PLB.ProjectLinkBoxContainer href={siteLink} target="_blank">
      <PLB.BoxLeft>
        <PLB.BoxTitle>{title}</PLB.BoxTitle>
        <PLB.BoxInfo>{introduction}</PLB.BoxInfo>
        <PLB.BoxLink>
          <img src={icon} alt="아이콘" />
          <span>{siteLink}</span>
        </PLB.BoxLink>
      </PLB.BoxLeft>
      <PLB.BoxRight>
        <LazyImage src={projectMainImg as string} alt={"메인이미지"} />
      </PLB.BoxRight>
    </PLB.ProjectLinkBoxContainer>
  );
};

export default ProjectLinkBox;
