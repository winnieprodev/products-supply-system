import { Button } from "components";
import { Order, OrderState } from "models";
import React from "react";

import * as Styled from "./orderList.styled";

interface OwnProps {
  items: Order[];
}

const OrderList: React.FC<OwnProps> = ({ items }) => {
  return (
    <Styled.Wrapper>
      {items.map((item) => (
        <Styled.OrderSection key={item.id}>
          <Styled.MonoSection>
            <Styled.MonoText>{item.supplier.mono}</Styled.MonoText>
          </Styled.MonoSection>
          <Styled.CreatedSection>
            <Styled.SupplierTitle>{item.supplier.title}</Styled.SupplierTitle>
            <Styled.CreatedText>
              <b>created:</b> {item.createdDate}
            </Styled.CreatedText>
          </Styled.CreatedSection>
          <Styled.ItemsSection>
            <Styled.ItemNums>{item.itemCount} items</Styled.ItemNums>
            {item.finishedDate && (
              <Styled.DeliveryText>
                <b>
                  {item.state == OrderState.EXPECTED
                    ? item.state + " delivery"
                    : item.state}
                  :
                </b>{" "}
                {item.finishedDate}
              </Styled.DeliveryText>
            )}
          </Styled.ItemsSection>
          <Styled.PrimaryAction>
            <Button primary fullWidth>
              Order again
            </Button>
          </Styled.PrimaryAction>
          <Styled.SecondaryActions>
            {item.state === OrderState.EXPECTED ? (
              <Button primary fullWidth>
                Edit order
              </Button>
            ) : (
              <Button transparent fullWidth>
                Report issue
              </Button>
            )}
          </Styled.SecondaryActions>
        </Styled.OrderSection>
      ))}
    </Styled.Wrapper>
  );
};

export default OrderList;
