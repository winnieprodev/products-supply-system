import styled from "styled-components";

export const ANIMATED_CLASS_LIST = "animated";

interface WrapperProps {
  $firstRun: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  display: ${({ $firstRun }) => ($firstRun ? "none" : "contents")};

  & > .${ANIMATED_CLASS_LIST} {
    opacity: 0;
    transform-origin: 0 0;
  }
`;
