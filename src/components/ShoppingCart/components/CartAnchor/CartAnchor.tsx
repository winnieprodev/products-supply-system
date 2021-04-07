import React from "react";

import * as Styled from "./cartAnchor.styled";

interface OwnProps {
  amount: number;
}
const CartAnchor: React.FC<OwnProps> = ({ amount }) =>
  amount > 0 ? <Styled.Circle>{amount}</Styled.Circle> : null;

export default CartAnchor;
