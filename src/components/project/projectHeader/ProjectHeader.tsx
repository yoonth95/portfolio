import React from "react";
import { Link } from "react-router-dom";
import { ProjectListType } from "@/types";
import { darkenColor } from "@/utils/colorChangeUtil";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft, faCalendarDays, faList, faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faVimeo } from "@fortawesome/free-brands-svg-icons";
import * as PH from "./ProjectHeader.styled";

interface ProjectHeaderProps {
  projectData: Partial<ProjectListType>;
  isModal: boolean;
}

const ProjectHeader: React.FC<ProjectHeaderProps> = ({ projectData, isModal }) => {
  return (
    <>
      <PH.Icon $isModal={isModal}>
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
          <div className="infoEach" style={projectData.github && projectData.github.length > 2 ? { height: "70px" } : undefined}>
            <PH.InfoLeft>
              <FontAwesomeIcon icon={faGithub} />
              <span>깃허브</span>
            </PH.InfoLeft>
            <PH.InfoRight>
              {projectData.github?.map((item) => (
                <Link key={item} to={item} target="_blank">
                  {item}
                </Link>
              ))}
            </PH.InfoRight>
          </div>
          {projectData.velog && (
            <div className="infoEach">
              <PH.InfoLeft>
                <FontAwesomeIcon icon={faVimeo} />
                <span>Velog</span>
              </PH.InfoLeft>
              <PH.InfoRight>
                <Link key={projectData.velog} to={projectData.velog} target="_blank">
                  {projectData.velog}
                </Link>
              </PH.InfoRight>
            </div>
          )}
        </div>
      </PH.Info>
    </>
  );
};

export default ProjectHeader;
