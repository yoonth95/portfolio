import { useState } from "react";
import { CareerTimeline, CareerBox, CareerBoxRight, CareerActive, CareerExp, CareerEdu } from "@/components/career";
import { careerYear, careerData } from "@/data/careerInfoList";
import { useResize } from "@/hooks";
import * as C from "./CareerPage.styled";

const CareerPage = () => {
  const [zoom, setZoom] = useState(1);
  useResize({ maxWidth: 600, setZoom });

  return (
    <C.CareerPageContainer $zoom={zoom}>
      <CareerBox boxTitle="타임라인" flexDirection="row">
        <CareerTimeline careerYear={careerYear} careerData={careerData} />
      </CareerBox>
      <CareerBox boxTitle="학력" flexDirection="column">
        <CareerBoxRight careerData={careerData.filter((item) => item.type === "education")} InfoComponent={CareerEdu} />
      </CareerBox>
      <CareerBox boxTitle="경력" flexDirection="column">
        <CareerBoxRight careerData={careerData.filter((item) => item.type === "experience")} InfoComponent={CareerExp} />
      </CareerBox>
      <CareerBox boxTitle="대외활동" flexDirection="column">
        <CareerBoxRight careerData={careerData.filter((item) => item.type === "active")} InfoComponent={CareerActive} />
      </CareerBox>
    </C.CareerPageContainer>
  );
};

export default CareerPage;
