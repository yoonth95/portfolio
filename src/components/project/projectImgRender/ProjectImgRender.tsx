import React from "react";
import { ProjectImgSlide } from "@/components/project";
import { ProjectListType } from "@/types";

interface ProjectImgRenderProps {
  projectData: ProjectListType;
}
const ProjectImgRender: React.FC<ProjectImgRenderProps> = ({ projectData }) => {
  return (
    <>
      {typeof projectData.projectImgList[0] === "string" ? (
        // 문자열 배열인 경우: 전체를 ProjectImgSlide 안에서 렌더링
        <ProjectImgSlide aspectRatio={projectData.projectImgAspectRatio}>
          {projectData.projectImgList.map((imgSrc, index) => (
            <img key={index} src={imgSrc as string} alt={`프로젝트 이미지 ${index}`} />
          ))}
        </ProjectImgSlide>
      ) : (
        // 객체인 경우: 각 섹션별로 ProjectImgSlide 컴포넌트를 사용
        projectData.projectImgList.map((section) =>
          Object.entries(section).map(([sectionTitle, images], index) => (
            <div key={index} style={{ marginBottom: "3rem" }}>
              <h3>{sectionTitle}</h3>
              <ProjectImgSlide aspectRatio={projectData.projectImgAspectRatio}>
                {images.map((imgSrc: string, imgIndex: number) => (
                  <img key={imgIndex} src={imgSrc} alt={`${sectionTitle} 이미지 ${imgIndex}`} />
                ))}
              </ProjectImgSlide>
              <ul className="imgDescription">
                {projectData.pageDescription?.[sectionTitle]?.map((description, descIndex) => (
                  <li key={descIndex}>{description}</li>
                ))}
              </ul>
            </div>
          )),
        )
      )}
    </>
  );
};

export default ProjectImgRender;
