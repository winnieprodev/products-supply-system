import LogoImg from "assets/images/logo.svg";
import React from "react";
import { Empty } from "utils/types";

import * as Styled from "./logo.styled";

export const Logo: React.FC<Empty> = () => (
  <Styled.Circle>
    <Styled.LogoImage src={LogoImg} />
  </Styled.Circle>
);

export default React.memo(Logo);
