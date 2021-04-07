import React from "react";
import { Empty } from "utils/types";

import * as Styled from "./content.styled";

const Content = ({ children }: React.PropsWithChildren<Empty>) => (
  <Styled.Content>{children}</Styled.Content>
);

export default React.memo(Content);
