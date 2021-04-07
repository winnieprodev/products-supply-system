import LogoImg from "assets/images/logo.svg";
import React from "react";
import { Empty } from "utils/types";

import * as Styled from "./loader.styled";

export const Loader: React.FC<Empty> = () => (
  <Styled.Circle>
    <Styled.LogoImage src={LogoImg} />
    <Styled.LogoImage $delay={0.4} src={LogoImg} />
    <Styled.LogoImage $delay={0.7} src={LogoImg} />
  </Styled.Circle>
);

export default React.memo(Loader);
