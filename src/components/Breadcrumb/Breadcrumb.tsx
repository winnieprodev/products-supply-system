import { ArrowRightIcon } from "components";
import React from "react";
import { Empty } from "utils/types";

import * as Styled from "./breadcrumb.styled";

const Breadcrumb = ({ children }: React.PropsWithChildren<Empty>) => (
  <Styled.Wrapper>{children}</Styled.Wrapper>
);

const Item = ({ children }: React.PropsWithChildren<Empty>) => (
  <Styled.ItemSection>
    {children}
    <Styled.Icon>
      <ArrowRightIcon />
    </Styled.Icon>
  </Styled.ItemSection>
);

Breadcrumb.Item = Item;

export default Breadcrumb;
