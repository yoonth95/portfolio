import React from "react";
import { useProjectNavStore } from "@/stores";
import * as PN from "./ProjectNav.styled";

interface ProjectNavProps {
  isModal: boolean;
  headings: string[];
}

const ProjectNav: React.FC<ProjectNavProps> = ({ isModal, headings }) => {
  const { isOpen } = useProjectNavStore();

  return (
    <PN.Navbar $isOpen={isOpen} $isModal={isModal}>
      <PN.ProjectNav>
        {headings.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </PN.ProjectNav>
    </PN.Navbar>
  );
};

export default ProjectNav;
