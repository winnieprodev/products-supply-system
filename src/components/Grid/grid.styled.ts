import styled, { css } from "styled-components";

interface GridProps {
  $itemsInRow: number;
  $centered: boolean;
}

export const Grid = styled.div<GridProps>`
  margin: 30px 0;
  display: flex;
  flex-wrap: wrap;
  ${({ $centered }) =>
    $centered &&
    css`
      justify-content: center;
    `}

  /* we must skip AnimatedGroup's body */
  & > * > * {
    width: calc(${({ $itemsInRow }) => Math.round(100 / $itemsInRow)}% - 24px);
    margin: 12px;
  }
`;
