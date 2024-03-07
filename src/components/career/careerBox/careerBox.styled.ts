import styled from "styled-components";

interface CareerBoxSectionProps {
  $flexDirection: string;
}
export const CareerBoxSection = styled.section<CareerBoxSectionProps>`
  display: flex;
  flex-direction: ${({ $flexDirection }) => $flexDirection};
  flex-wrap: nowrap;
  justify-content: space-between;
  width: 1000px;
  border-radius: 0.75rem;
  border: 0.0625rem solid #e9ecf3;
  padding: 1.5rem;
`;

export const CareerBoxLeft = styled.div`
  width: 11rem;
  max-height: 2.125rem;

  & h4 {
    font-weight: bold;
  }
`;
