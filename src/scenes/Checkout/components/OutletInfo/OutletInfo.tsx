import { OutletIcon } from "components";
import { Outlet } from "models";

import * as Styled from "./outletInfo.styled";
interface OwnProps {
  item: Outlet;
}

const OutletInfo: React.FC<OwnProps> = ({ item }) => (
  <Styled.Wrapper>
    <Styled.Icon>
      <OutletIcon />
    </Styled.Icon>
    <Styled.Info>
      <Styled.OutletTitle>{item.code}</Styled.OutletTitle>
      <Styled.OutletSubTitle>{item.fullname}</Styled.OutletSubTitle>
      <Styled.OutletAddress>{item.address}</Styled.OutletAddress>
      <Styled.OutletPhone>{item.phone}</Styled.OutletPhone>
    </Styled.Info>
  </Styled.Wrapper>
);

export default OutletInfo;
