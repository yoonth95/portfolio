import styled from "styled-components";

interface CareerBoxSectionProps {
  $flexDirection: string;
}
export const CareerBoxSection = styled.section<CareerBoxSectionProps>`
  display: flex;
  flex-direction: ${({ $flexDirection }) => $flexDirection};
  flex-wrap: nowrap;
  justify-content: space-between;
  width: calc(100% - 20rem);
  border-radius: 0.75rem;
  border: 0.0625rem solid #e9ecf3;
  padding: 1.5rem;

  @media (max-width: 1500px) {
    width: calc(100% - 10rem);
  }

  @media (max-width: 900px) {
    width: calc(100% - 3rem);
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }

  @media (max-width: 426px) {
    width: 100%;
  }
`;

export const CareerBoxLeft = styled.div`
  width: 11rem;
  max-height: 2.125rem;
`;
