import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { useSidebarStore } from "@/stores";
import * as PN from "./ProjectNav.styled";

interface ProjectNavProps {
  isModal: boolean;
  headings: string[];
}

const duration = 500;

const ProjectNav: React.FC<ProjectNavProps> = ({ isModal, headings }) => {
  const { toggleSidebar } = useSidebarStore();
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const resizeWidth = () => {
      if (toggleSidebar) {
        window.innerWidth < 1540 ? setIsOpen(false) : setIsOpen(true);
      } else {
        window.innerWidth < 1300 ? setIsOpen(false) : setIsOpen(true);
      }
    };

    resizeWidth();
    window.addEventListener("resize", resizeWidth);

    return () => window.addEventListener("resize", resizeWidth);
  }, [toggleSidebar]);

  return (
    <PN.Navbar $isOpen={isOpen} $isModal={isModal}>
      <PN.ProjectNav>
        {headings.map((item, index) => {
          const [tagId, tagName, text] = item.split("_");
          return (
            <Link key={index} activeClass="active" to={`${tagId}`} spy smooth duration={duration} offset={-60}>
              <li className={`${tagName}`}>{text}</li>
            </Link>
          );
        })}
      </PN.ProjectNav>
    </PN.Navbar>
  );
};

export default ProjectNav;
