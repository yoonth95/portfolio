import styled from "styled-components";

export const TimelineContainer = styled.div`
  width: calc(100% - 11rem);
  height: max-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const TimelinePeriod = styled.div`
  display: inline-flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 1.5rem;

  & span {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-right: 0.25rem;
    font-size: 20px;
    letter-spacing: -0.009em;
    font-weight: 700;
    word-break: break-all;
  }
`;

export const TimelineGridWrap = styled.div`
  width: 100%;
  min-height: 50px;
`;

interface TimelineGridLabelsProps {
  $totalYear: number;
}
export const TimelineGridLabels = styled.div<TimelineGridLabelsProps>`
  display: grid;
  grid-template-columns: repeat(${({ $totalYear }) => $totalYear}, 1fr);
  margin-bottom: 0.125rem;

  & .year {
    font-size: 12px;
    position: relative;
    padding-left: 0.25rem;
    border-left: 0.0625rem solid #d7e2eb;
    color: #b2c0cc;
  }

  & .year::after {
    content: "";
    position: absolute;
    left: -0.0625rem;
    top: calc(100% + 0.0625rem);
    width: 0.0625rem;
    height: 1.8125rem;
    background-color: #d7e2eb;
  }
`;

export const TimelineGrid = styled.div<TimelineGridLabelsProps>`
  display: grid;
  grid-template-columns: repeat(${({ $totalYear }) => $totalYear * 12}, 1fr);
  grid-auto-flow: column dense;
  /* grid-gap: 0.125rem; */
  padding-top: 7px;
`;

interface TimelineItemProps {
  $gridColumn: string;
}
export const TimelineItem = styled.div<TimelineItemProps>`
  height: 1.6rem;
  line-height: 1.4;
  position: relative;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  padding: 0.3rem 0.5rem;
  border-radius: 0.125rem;
  background-color: #44576c;
  font-size: 12px;
  z-index: 2;
  color: white;
  cursor: text;
  grid-column: ${({ $gridColumn }) => $gridColumn};

  &.education {
    background-color: #637c8c;
  }
  &.experience {
    background-color: #637c8c;
  }
  &.active {
    background-color: #7890a0;
  }
`;

export const AddText = styled.span`
  font-style: italic;
  opacity: 0.48;
`;
