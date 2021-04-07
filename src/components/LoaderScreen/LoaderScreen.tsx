import { WrapperMode } from "models";
import React from "react";

import { Loader } from "../Loader";
import * as Styled from "./loaderScreen.styled";

interface OwnProps {
  mode?: WrapperMode;
}
export const LoaderScreen: React.FC<React.PropsWithChildren<OwnProps>> = ({
  children,
  mode = WrapperMode.full,
}) => (
  <Styled.Wrapper $mode={mode}>
    <Loader />
    <Styled.Message>{children}</Styled.Message>
  </Styled.Wrapper>
);

export default React.memo(LoaderScreen);
