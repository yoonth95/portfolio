import styled from "styled-components";

export const SlideContainer = styled.div`
  .slick-prev {
    left: -35px;
  }
  .slick-next {
    right: -35px;
  }
  .slick-prev:before,
  .slick-next:before {
    color: black;
  }

  & img {
    aspect-ratio: 1 / 1;
    object-fit: contain;
  }
`;
