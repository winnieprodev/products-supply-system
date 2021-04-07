import { SadIcon } from "components";
import React from "react";

import * as Styled from "./emptyState.styled";

interface OwnProps {
  items: any[];
  message?: string;
  searchPhrase?: string;
  searchMessage?: string;
}
export const EmptyState: React.FC<React.PropsWithChildren<OwnProps>> = ({
  items,
  children,
  message = "No items available",
  searchPhrase,
  searchMessage = "No items found",
}) => {
  if (items.length > 0) {
    return <>{children}</>;
  }
  return (
    <Styled.Wrapper>
      <Styled.Icon>
        <SadIcon />
      </Styled.Icon>
      <Styled.Title>{searchPhrase ? searchMessage : message}</Styled.Title>
    </Styled.Wrapper>
  );
};

export default EmptyState;
