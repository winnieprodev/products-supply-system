import { AnimatedGroup } from "components";
import React from "react";

import * as Styled from "./grid.styled";

interface OwnProps {
  itemsInRow?: number;
  centered?: boolean;
}

const Grid: React.FC<React.PropsWithChildren<OwnProps>> = ({
  itemsInRow = 5,
  centered = false,
  children,
}) => (
  <Styled.Grid $itemsInRow={itemsInRow} $centered={centered}>
    <AnimatedGroup>{children}</AnimatedGroup>
  </Styled.Grid>
);

export default Grid;
