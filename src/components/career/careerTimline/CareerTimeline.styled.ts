import styled from "styled-components";

export const TimelineSection = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  width: 1000px;
  border-radius: 0.75rem;
  border: 0.0625rem solid #e9ecf3;
  padding: 0 1.5rem;
`;

export const TimelineLeft = styled.div`
  width: 11rem;
  max-height: 2.125rem;

  & h4 {
    font-weight: bold;
    margin: 1.5rem 0;
  }
`;

export const TimelineRight = styled.div`
  width: calc(100% - 11rem);
  height: max-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 1.5rem 0;
`;

export const TimelinePeriod = styled.div`
  display: inline-flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 1rem;

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
  totalYear: number;
}
export const TimelineGridLabels = styled.div<TimelineGridLabelsProps>`
  display: grid;
  grid-template-columns: repeat(${({ totalYear }) => totalYear}, 1fr);
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
  grid-template-columns: repeat(${({ totalYear }) => totalYear * 12}, 1fr);
  grid-auto-flow: column dense;
  /* grid-gap: 0.125rem; */
  padding-top: 7px;

  & .items {
    position: relative;
    text-align: center;
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
  }
`;

export const AddText = styled.span`
  font-style: italic;
  opacity: 0.48;
`;

// .grid-timeline .items.education {
//   grid-column: 1 / 39;
//   background-color: #7890a0;
// }

// .grid-timeline .items.active1 {
//   grid-column: 39 / 45;
//   background-color: #637c8c;
// }

// .grid-timeline .items.experience {
//   grid-column: 48 / 66;
// }

// .grid-timeline .items.active2 {
//   grid-column: 66 / 69;
//   background-color: #637c8c;
// }
