import React from "react";
import { careerTimelineYear } from "@/data/careerInfoList";
import * as C from "./CareerTimeline.styled";

const CareerTimeline = () => {
  return (
    <C.TimelineSection>
      <C.TimelineLeft>
        <h4>타임라인</h4>
      </C.TimelineLeft>
      <C.TimelineRight>
        <C.TimelinePeriod>
          <span>개발 경력 1년 5개월</span>
        </C.TimelinePeriod>
        <C.TimelineGridWrap>
          <C.TimelineGridLabels totalYear={careerTimelineYear.length}>
            {careerTimelineYear.map((year) => (
              <div className="year">{year}</div>
            ))}
          </C.TimelineGridLabels>
          <C.TimelineGrid totalYear={careerTimelineYear.length}>
            <div className="items education">
              한서대학교 <C.AddText>항공전자공학과</C.AddText>
            </div>
            <div className="items active1" title="한경닷컴IT교육센터">
              한경닷컴IT교육센터
            </div>
            <div className="items experience" title="(주)스마트디아그노시스 연구원">
              (주)스마트디아그노시스 <C.AddText>연구원</C.AddText>
            </div>
            <div className="items active2" title="[유데미X웅진씽크빅] React 프로젝트 캠프">
              [유데미X웅진씽크빅] React 프로젝트 캠프
            </div>
            <div className="items active3" title="[멋쟁이사자처럼] 프론트엔드 스쿨 (심화)">
              [멋쟁이사자처럼] 프론트엔드 스쿨 (심화)
            </div>
          </C.TimelineGrid>
        </C.TimelineGridWrap>
      </C.TimelineRight>
    </C.TimelineSection>
  );
};

export default CareerTimeline;
