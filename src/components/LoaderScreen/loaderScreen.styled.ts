import { WrapperMode } from "models";
import styled, { css, keyframes } from "styled-components";

interface WrapperProps {
  $mode: WrapperMode;
}

const popTinyWrapper = keyframes`
  from{ 
    transform: scale(0.2);
    opacity: 0;
  }
  to {
    opacity: 1;
    transform: scale(0.5);
  }
`;

export const Wrapper = styled.div<WrapperProps>`
  ${({ $mode }) =>
    $mode === WrapperMode.full
      ? css`
          margin: 20vh auto;
        `
      : css`
          margin: 8px auto;
        `}

  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ $mode }) =>
    $mode === WrapperMode.tiny &&
    css`
      width: 48px;
      position: fixed;
      right: 30px;
      top: -4px;
      transform: scale(0.5);
      animation: ${popTinyWrapper} ease 0.3s;
    `};
`;

export const Message = styled.div`
  font-weight: bold;
  margin-top: 16px;
`;
