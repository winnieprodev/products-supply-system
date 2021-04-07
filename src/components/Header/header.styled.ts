import styled, { css } from "styled-components";

interface HeaderProps {
  $scrolled: boolean;
}
export const Header = styled.div<HeaderProps>`
  position: sticky;
  top: 0;
  padding: 16px;
  background: white;
  display: grid;
  grid-template-columns: [left] 1fr [right];
  z-index: +1;

  ${({ $scrolled }) =>
    $scrolled &&
    css`
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
    `}
`;

export const AlignLeft = styled.div`
  grid-area: left;
  align-self: center;
`;

export const AlignRight = styled.div`
  grid-area: right;
  align-self: center;
  display: flex;
  align-items: center;
`;
