import { OrderState } from "models";
import { mockOrder } from "utils";
import { Empty } from "utils/types";

import { OrderList } from "./components";
import * as Styled from "./myOrders.styled";

const MyOrders: React.FC<Empty> = () => {
  return (
    <Styled.Wrapper>
      <Styled.PrimaryTitle>My orders</Styled.PrimaryTitle>
      <OrderList
        items={[
          mockOrder("order1", "15/03/2021", OrderState.EXPECTED, "18/03/2021"),
          mockOrder("order2", "11/03/2021", OrderState.DELIVERED, "13/03/2021"),
          mockOrder("order3", "08/03/2021", OrderState.DELIVERED, "10/03/2021"),
        ]}
      />
    </Styled.Wrapper>
  );
};

export default MyOrders;
