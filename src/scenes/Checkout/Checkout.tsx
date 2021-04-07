import {
  AsyncWrapper,
  Button,
  Input,
  ProductCartItem,
  SupplierLink,
} from "components";
import {
  useGetCart,
  useGetOutlet,
  useGetSupplier,
  useSetCartItem,
} from "queries";
import { useMemo, useState } from "react";
import { useParams } from "react-router";
import { CheckoutParams } from "routes";
import { Empty } from "utils/types";

import * as Styled from "./checkout.styled";
import { OutletInfo, CalendarSection } from "./components";

const Checkout: React.FC<Empty> = () => {
  const {
    cartId: cartIdString,
    supplierId,
    supplierType,
    outletId,
  } = useParams<CheckoutParams>();

  const cartId = parseInt(cartIdString, 10);

  const [selectedDate, setSelectedDate] = useState(new Date());

  const [noteInputValue, setNoteInputValue] = useState("");

  const supplier = useGetSupplier(supplierId);
  const outlet = useGetOutlet(outletId);
  const cart = useGetCart(cartId);
  const [_setProduct, removeProduct] = useSetCartItem();

  return (
    <Styled.Wrapper>
      <Styled.SectionTitle>Outlet to delivery to:</Styled.SectionTitle>
      <Styled.Section>
        <AsyncWrapper item={outlet}>
          {outlet.data && <OutletInfo item={outlet.data} />}
        </AsyncWrapper>
      </Styled.Section>
      <Styled.SectionTitle>Your order: </Styled.SectionTitle>
      <Styled.Section>
        <AsyncWrapper item={supplier}>
          {supplier.data && (
            <SupplierLink
              item={supplier.data}
              outletId={outletId}
              supplierType={supplierType}
            />
          )}
        </AsyncWrapper>
      </Styled.Section>
      <AsyncWrapper item={cart}>
        <Styled.Section>
          {cart.data &&
            cart.data.map((product) => (
              <ProductCartItem
                key={product.productId}
                item={product}
                outletId={outletId}
                supplierId={supplierId}
                supplierType={supplierType}
                onRemove={() => removeProduct(cartId, product.productId)}
              />
            ))}
        </Styled.Section>
        <Styled.Section>
          <Styled.Note>
            Note to supplier: <br />
            <Input value={noteInputValue} onChange={setNoteInputValue} />
          </Styled.Note>
        </Styled.Section>
      </AsyncWrapper>
      <Styled.SectionTitle>Date of delivery:</Styled.SectionTitle>
      <CalendarSection
        value={selectedDate}
        onChange={setSelectedDate}
        availableDates={useMemo(
          () => ["2021-04-10", "2021-04-12", "2021-04-15"],
          [],
        )}
      />
      <Styled.SubmitSection>
        <Styled.PrimaryAction>
          <Styled.SubmitButton>
            <Button primary fullWidth>
              Submit
            </Button>
          </Styled.SubmitButton>
        </Styled.PrimaryAction>
        <Styled.SecondaryActions>
          <Button transparent>View PDF</Button>
          <Button transparent>Export CSV</Button>
        </Styled.SecondaryActions>
      </Styled.SubmitSection>
    </Styled.Wrapper>
  );
};

export default Checkout;
