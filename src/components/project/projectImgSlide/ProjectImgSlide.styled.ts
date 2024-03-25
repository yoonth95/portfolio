import styled from "styled-components";

interface SlideContainerProps {
  $aspectRatio: string;
}
export const SlideContainer = styled.div<SlideContainerProps>`
  .slick-prev {
    left: 0px;
  }
  .slick-next {
    right: 0px;
  }
  .slick-prev:before,
  .slick-next:before {
    color: black;
  }
  .slick-dots {
    bottom: -30px;
  }

  & img {
    aspect-ratio: ${({ $aspectRatio }) => $aspectRatio};
    object-fit: contain;
  }
`;
