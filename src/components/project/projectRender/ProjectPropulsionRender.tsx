import { ProjectImgSlide } from "@/components/project";

interface ProjectPropulsionRenderProps {
  [key: string]: string | string[] | undefined;
  aspectRatio?: string;
}

const ProjectPropulsionRender = ({ propulsionData }: { propulsionData: ProjectPropulsionRenderProps[][] }) => {
  return (
    <ul>
      {propulsionData.map((itemPair, index, array) => {
        const contentItem = itemPair[0];
        const aspectRatioItem = itemPair[1];

        const aspectRatio = aspectRatioItem.aspectRatio || "16/9";

        return Object.keys(contentItem).map((key) => {
          const value = contentItem[key];

          return (
            <li
              key={index}
              style={{
                marginBottom: index === array.length - 1 ? "3rem" : "5rem",
              }}
            >
              <h3 id="sectionPropulsionDetail">{key}</h3>
              {Array.isArray(value) ? (
                <ProjectImgSlide aspectRatio={aspectRatio}>
                  {value.map((imgSrc: string, imgIndex: number) => (
                    <img key={imgIndex} src={imgSrc} alt={`이미지 ${imgIndex}`} />
                  ))}
                </ProjectImgSlide>
              ) : (
                value && <img src={value as string} alt={`이미지`} style={{ width: "100%", aspectRatio, objectFit: "contain" }} />
              )}
            </li>
          );
        });
      })}
    </ul>
  );
};

export default ProjectPropulsionRender;
