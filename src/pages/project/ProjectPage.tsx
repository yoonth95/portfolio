import { ProjectBox } from "@/components/project";
import { LazyImage } from "@/components/common";
import { Modal } from "@/components/layouts";
import { BetaBetaPage, EggMbtiPage, HappymanwonPage, WebBuilderPage } from "@/pages";
import { useModalStore } from "@/stores";
import { projectList } from "@/data/projectList";
import { desktopGif } from "@/assets/images";
import * as P from "./ProjectPage.styled";

const ProjectPage = () => {
  const { isOpen, dataName } = useModalStore();

  const pages = {
    "egg-mbti": <EggMbtiPage />,
    happymanwon: <HappymanwonPage />,
    "beta-beta": <BetaBetaPage />,
    "web-builder": <WebBuilderPage />,
  };

  return (
    <P.ProjectContainer>
      <section>
        <P.ProjectTitle>
          <LazyImage src={desktopGif} alt={"트로피gif"} />
          <h2>프로젝트</h2>
        </P.ProjectTitle>
        <hr />
        <P.ProjectBoxList>
          {projectList.map((item) => (
            <li key={item.name}>
              <ProjectBox data={item} />
            </li>
          ))}
        </P.ProjectBoxList>
      </section>
      {isOpen && <Modal>{pages[dataName as keyof typeof pages]}</Modal>}
    </P.ProjectContainer>
  );
};

export default ProjectPage;
