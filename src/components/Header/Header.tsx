import { useScrollPosition } from "hooks";
import React from "react";
import { Empty } from "utils/types";

import * as Styled from "./header.styled";

const Header = ({ children }: React.PropsWithChildren<Empty>) => {
  const scrollPosition = useScrollPosition();
  return (
    <Styled.Header $scrolled={scrollPosition > 30}>{children}</Styled.Header>
  );
};

const AlignLeft = ({ children }: React.PropsWithChildren<Empty>) => (
  <Styled.AlignLeft>{children}</Styled.AlignLeft>
);

const AlignRight = ({ children }: React.PropsWithChildren<Empty>) => (
  <Styled.AlignRight>{children}</Styled.AlignRight>
);

Header.AlignLeft = AlignLeft;
Header.AlignRight = AlignRight;

export default Header;
