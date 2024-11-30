import { Tooltip } from "react-tooltip";
import { CareerYearType, CareerDataType } from "@/types/CareerInfoType";
import { diffMonth, formatDuration } from "@/utils/dateUtil";
import * as C from "./CareerTimeline.styled";

interface CareerTimelineType {
  careerYear: CareerYearType;
  careerData: CareerDataType[];
}

const CareerTimeline: React.FC<CareerTimelineType> = ({ careerYear, careerData }) => {
  // careerYear의 가장 빠른 년도와 careerData의 start_date 년도 값 비교
  const getAdjustedStartDate = (dataStartDate: string, baseYear: number) => {
    const start = new Date(dataStartDate);
    return start.getFullYear() < baseYear ? `${baseYear}-01` : dataStartDate;
  };

  // 전체 개발 경력
  const totalExperience = () => {
    const filterData = careerData.filter((item) => item.type === "experience");
    return filterData.reduce((total, item) => {
      const start_date = new Date(item.start_date);
      const end_date = new Date(item.end_date);
      const months = (end_date.getFullYear() - start_date.getFullYear()) * 12 + end_date.getMonth() - start_date.getMonth() + 1;
      return total + months;
    }, 0);
  };

  return (
    <C.TimelineContainer>
      <C.TimelinePeriod>
        <h2>{`개발 경력 ${formatDuration(totalExperience())}`}</h2>
      </C.TimelinePeriod>
      <C.TimelineGridWrap>
        <C.TimelineGridLabels $totalYear={careerYear.length}>
          {careerYear.map((year, index) => (
            <div key={index} className="year">
              {year}
            </div>
          ))}
        </C.TimelineGridLabels>
        <C.TimelineGrid $totalYear={careerYear.length}>
          {careerData.map((data, index) => {
            const adjustedStartDate = getAdjustedStartDate(data.start_date, careerYear[0]);
            const gridColumnStart = diffMonth(`${careerYear[0]}-01`, adjustedStartDate);
            const gridColumnEnd = gridColumnStart + diffMonth(adjustedStartDate, data.end_date);

            const transDiffMonth = formatDuration(diffMonth(data.start_date, data.end_date));

            return (
              <C.TimelineItem
                key={index}
                className={data.type}
                data-tooltip-id="items"
                data-tooltip-content={`${data.title}/${data.subTitle}`}
                data-diff-month={transDiffMonth}
                data-duration-date={`${data.start_date} ~ ${data.end_date}`}
                $gridColumn={`${gridColumnStart} / ${gridColumnEnd}`}
              >
                {data.title} <C.AddText>{data.subTitle}</C.AddText>
              </C.TimelineItem>
            );
          })}
          <Tooltip
            id="items"
            opacity={1}
            style={{ zIndex: 10 }}
            render={({ content, activeAnchor }) => {
              if (content) {
                const [title, subTitle] = content.split("/");
                return (
                  <>
                    <h3 style={{ marginBottom: "5px" }}>{title}</h3>
                    <h4>{subTitle}</h4>
                    {activeAnchor?.getAttribute("data-diff-month")}
                    <br />
                    {activeAnchor?.getAttribute("data-duration-date")}
                  </>
                );
              }
            }}
          />
        </C.TimelineGrid>
      </C.TimelineGridWrap>
    </C.TimelineContainer>
  );
};

export default CareerTimeline;
