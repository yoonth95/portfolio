import React from "react";
import { ProjectListType } from "@/types";
import { darkenColor } from "@/utils/colorChangeUtil";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft, faCalendarDays, faList, faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import * as PH from "./ProjectHeader.styled";

interface ProjectHeaderProps {
  projectData: Partial<ProjectListType>;
  isModal: boolean;
}

const ProjectHeader: React.FC<ProjectHeaderProps> = ({ projectData, isModal }) => {
  console.log(projectData, isModal);
  return (
    <>
      <PH.Icon>
        <img src={projectData.icon} alt="아이콘" />
      </PH.Icon>
      <PH.Title>{projectData.title}</PH.Title>
      <PH.Info>
        <div className="infoArea">
          <div className="infoEach">
            <PH.InfoLeft>
              <FontAwesomeIcon icon={faAlignLeft} />
              <span>소개</span>
            </PH.InfoLeft>
            <PH.InfoRight>{projectData.introduction}</PH.InfoRight>
          </div>
          <div className="infoEach">
            <PH.InfoLeft>
              <FontAwesomeIcon icon={faCalendarDays} />
              <span>기간</span>
            </PH.InfoLeft>
            <PH.InfoRight>{projectData.date}</PH.InfoRight>
          </div>
          <div className="infoEach">
            <PH.InfoLeft>
              <FontAwesomeIcon icon={faList} />
              <span>사용 기술</span>
            </PH.InfoLeft>
            <PH.InfoRight>
              <ul className="techListUl">
                {projectData.techStack?.map((item, index) => (
                  <li key={index} className="techListLi" style={{ backgroundColor: item[1], color: darkenColor(item[1], 130) }}>
                    {item[0]}
                  </li>
                ))}
              </ul>
            </PH.InfoRight>
          </div>
          <div className="infoEach">
            <PH.InfoLeft>
              <FontAwesomeIcon icon={faPeopleGroup} />
              <span>팀 구성</span>
            </PH.InfoLeft>
            <PH.InfoRight>{projectData.team}</PH.InfoRight>
          </div>
        </div>
      </PH.Info>
    </>
  );
};

export default ProjectHeader;
