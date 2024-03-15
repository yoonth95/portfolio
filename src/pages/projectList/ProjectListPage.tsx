import ProjectPage from "../project/ProjectPage";
import { ProjectBox, ProjectModal } from "@/components/project";
import { LazyImage } from "@/components/common";
import { useModalStore } from "@/stores";
import { projectList } from "@/data/projectList";
import { desktopGif } from "@/assets/images";
import * as P from "./ProjectListPage.styled";

const ProjectListPage = () => {
  const { isOpen } = useModalStore();

  return (
    <P.ProjectListContainer>
      <section>
        <P.ProjectListTitle>
          <LazyImage src={desktopGif} alt={"트로피gif"} />
          <h2>프로젝트</h2>
        </P.ProjectListTitle>
        <hr />
        <P.ProjectListArea>
          {projectList.map((item) => (
            <li key={item.name}>
              <ProjectBox data={item} />
            </li>
          ))}
        </P.ProjectListArea>
      </section>
      {isOpen && (
        <ProjectModal>
          <ProjectPage />
        </ProjectModal>
      )}
    </P.ProjectListContainer>
  );
};

export default ProjectListPage;
