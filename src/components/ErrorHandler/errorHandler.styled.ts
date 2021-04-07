import { WrapperMode } from "models";
import styled, { css } from "styled-components";
import {
  errorBackgroundColor,
  errorBackgroundColorDarker,
  errorColor,
} from "styles/colors";

interface WrapperProps {
  $mode: WrapperMode;
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ $mode }) =>
    $mode === WrapperMode.full
      ? css`
          margin: 10vh auto 0;
        `
      : css`
          margin: 1vh auto;
        `}
  background: ${errorBackgroundColor};
  padding: 16px;
  width: 260px;
  border-radius: 6px;
  color: ${errorColor};
  ${({ $mode }) =>
    $mode === WrapperMode.tiny &&
    css`
      background: transparent;
    `}
`;

export const TinyAnchor = styled.div`
  background: ${errorBackgroundColor};
  border-radius: 50%;
  padding: 4px;
  width: 34px;
  color: ${errorColor};
  margin-left: 4px;
`;

export const Icon = styled.div`
  text-align: center;
  font-size: 24px;
  margin: 4px;
`;

export const Title = styled.div`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const Message = styled.div`
  font-size: 16px;
  margin-bottom: 16px;
  text-align: center;
`;

export const Description = styled.div`
  font-size: 10px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 4px;
`;

export const ErrorMessage = styled.div`
  background: ${errorBackgroundColorDarker};
  margin: 0;
  color: initial;
  padding: 16px 10px;
  font-size: 13px;
  border-radius: 4px;
  font-family: monospace;
`;
