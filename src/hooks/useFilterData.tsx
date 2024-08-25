import { useLocation, useNavigate } from "react-router-dom";
import { useModalStore } from "@/stores";
import { projectList } from "@/data/projectList";

const filterProjectData = (projectName: string) => {
  return projectList.find((project) => project.projectName === projectName);
};

const useWithProject = () => {
  const location = useLocation();
  const navigator = useNavigate();
  const { projectName: storeProjectName, isOpen: isModal } = useModalStore();

  const pathProjectName = location.pathname.replace("/project/", "");

  const projectData = pathProjectName === "/project" ? filterProjectData(storeProjectName) : filterProjectData(pathProjectName);

  if (!projectData) {
    navigator("/error");
  }

  return {
    ...(projectData ?? projectList[0]),
    isModal,
  };
};

export default useWithProject;
