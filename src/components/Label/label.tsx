import React from "react";

import * as Styled from "./label.styled";

interface OwnProps {
  text: string;
  id?: string;
}

const Input: React.FC<React.PropsWithChildren<OwnProps>> = ({
  children,
  text,
  id,
}) => (
  <Styled.Label id={id}>
    <Styled.Text>{text}</Styled.Text>
    {children}
  </Styled.Label>
);

export default Input;
