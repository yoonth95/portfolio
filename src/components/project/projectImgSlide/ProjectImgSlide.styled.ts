import styled from "styled-components";

interface SlideContainerProps {
  $aspectRatio: string;
}
export const SlideContainer = styled.div<SlideContainerProps>`
  .slick-list {
    width: 90%;
    left: 35px;
  }
  .slick-prev {
    left: 0px;
    z-index: 1;
  }
  .slick-next {
    right: 0px;
    z-index: 1;
  }
  .slick-prev:before,
  .slick-next:before {
    color: black;
  }
  .slick-dots {
    bottom: -40px;
  }

  & img {
    aspect-ratio: ${({ $aspectRatio }) => $aspectRatio};
    object-fit: contain;
  }
`;
