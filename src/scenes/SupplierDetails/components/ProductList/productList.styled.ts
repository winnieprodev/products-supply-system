import styled from "styled-components";

const ROWS = 5;

export const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-top: 35px;
  margin-bottom: 35px;
  gap: 1%;
`;

interface ProductProps {
  $index: number;
}

export const Product = styled.div<ProductProps>`
  order: ${({ $index }) => $index};
  width: 19%;
`;

interface DetailsProps {
  $index: number;
}

/* FYI: We need that transform: none, to neutalize AnimatedGroup's transform, which mess AddToOrderButton's animation */
export const Details = styled.div<DetailsProps>`
  order: ${({ $index }) => Math.ceil((1 + $index) / ROWS) * ROWS};
  width: 100%;
  transform: none !important;
`;
