import { useLocation } from "react-router-dom";
import { useModalStore } from "@/stores";
import { projectList } from "@/data/projectList";

const useWithProject = () => {
  const location = useLocation();
  const { projectId: storeProjectId, isOpen: isModal } = useModalStore();

  const pathProjectId = parseInt(location.pathname.replace("/project/", ""), 10);
  const projectId = !isNaN(pathProjectId) ? pathProjectId : storeProjectId;

  const projectData = projectList.find((project) => project.projectId === projectId);

  return {
    ...projectData,
    isModal,
  };
};

export default useWithProject;
