import { PhoneIcon } from "components";
import React from "react";

import * as Styled from "./outletInfo.styled";

interface OwnProps {
  address: string;
  phone: string;
}

const OutletInfo: React.FC<OwnProps> = ({ address, phone }) => (
  <Styled.Wrapper>
    <Styled.Address>{address}</Styled.Address>
    <Styled.Phone>
      <PhoneIcon /> {phone}
    </Styled.Phone>
  </Styled.Wrapper>
);

export default React.memo(OutletInfo);
