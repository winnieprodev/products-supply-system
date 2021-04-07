import { ErrorIcon, Dropdown } from "components";
import { Error, WrapperMode } from "models";
import React from "react";

import * as Styled from "./errorHandler.styled";

interface OwnProps {
  error: Error;
  message?: string;
}

export const TinyErrorHandler: React.FC<OwnProps> = ({
  error,
  message = "Sorry, we've encountered an issue",
}) => {
  return (
    <Dropdown
      anchor={
        <Styled.TinyAnchor>
          <Styled.Icon>
            <ErrorIcon />
          </Styled.Icon>
        </Styled.TinyAnchor>
      }
    >
      <Styled.Wrapper $mode={WrapperMode.tiny}>
        <Styled.Title>Error</Styled.Title>
        <Styled.Message>{message}</Styled.Message>
        <Styled.Description>error details:</Styled.Description>
        <Styled.ErrorMessage>{error.message}</Styled.ErrorMessage>
      </Styled.Wrapper>
    </Dropdown>
  );
};

export default React.memo(TinyErrorHandler);
