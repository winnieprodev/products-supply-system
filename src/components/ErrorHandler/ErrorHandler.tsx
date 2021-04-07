import { ErrorIcon } from "components";
import { Error, WrapperMode } from "models";
import React from "react";

import * as Styled from "./errorHandler.styled";
import TinyErrorHandler from "./TinyErrorHandler";

interface OwnProps {
  error: Error;
  message?: string;
  mode?: WrapperMode;
}

export const ErrorHandler: React.FC<OwnProps> = ({
  error,
  message = "Sorry, we've encountered an issue",
  mode = WrapperMode.full,
}) => {
  console.error(error);
  if (mode === WrapperMode.tiny) {
    return <TinyErrorHandler error={error} message={message} />;
  }
  return (
    <Styled.Wrapper $mode={mode}>
      <Styled.Icon>
        <ErrorIcon />
      </Styled.Icon>
      <Styled.Title>Error</Styled.Title>
      <Styled.Message>{message}</Styled.Message>
      <Styled.Description>error details:</Styled.Description>
      <Styled.ErrorMessage>{error.message}</Styled.ErrorMessage>
    </Styled.Wrapper>
  );
};

export default React.memo(ErrorHandler);
