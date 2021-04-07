import {
  AddToOrderButton,
  AmountInput,
  CloseIcon,
  WarningIcon,
} from "components";
import { ShoppingCartContext } from "components/ShoppingCart";
import { SupplierLink } from "components/SupplierLink/SupplierLink";
import { Map } from "immutable";
import { CartQuantity, Product, QuantityType, Supplier } from "models";
import { useContext, useState } from "react";
import { useParams } from "react-router";
import { SupplierDetailsParams } from "routes";

import * as Styled from "./productDetails.styled";
import { quantitiesToMap } from "./utils";

interface OwnProps {
  onClose: () => void;
  item: Product;
  cartQuantities: CartQuantity[] | undefined;
  supplier: Supplier;
}

const ProductDetails: React.FC<React.PropsWithChildren<OwnProps>> = ({
  onClose,
  supplier,
  cartQuantities = [],
  item,
}) => {
  const { setProduct } = useContext(ShoppingCartContext);

  const { outletId, supplierType } = useParams<SupplierDetailsParams>();

  const [quantities, setQuantities] = useState<Map<QuantityType, number>>(
    quantitiesToMap(cartQuantities),
  );

  const getQuantityFor = (type: QuantityType) => quantities.get(type, 0);
  const setQuantityFor = (type: QuantityType) => (amount: number) => {
    setQuantities(quantities.set(type, amount));
  };

  const totalAmount = quantities.reduce((acc, value) => acc + value, 0);

  const addToOrder = () => {
    setProduct({
      productId: item.id,
      quantities: quantities.reduce<CartQuantity[]>(
        (acc, amount, type) => [...acc, { amount, type }],
        [],
      ),
    });
  };

  const isEditMode = cartQuantities.length > 0;

  return (
    <Styled.Block>
      <Styled.Content>
        {item.image ? <Styled.Image src={item.image} /> : <Styled.NoImage />}
      </Styled.Content>
      <Styled.InfoSection>
        <Styled.CloseIcon onClick={onClose}>
          <CloseIcon />
        </Styled.CloseIcon>
        <Styled.ProductTitle>{item.title}</Styled.ProductTitle>
        <Styled.SupplierSection>
          <SupplierLink
            item={supplier}
            outletId={outletId}
            supplierType={supplierType}
          />
        </Styled.SupplierSection>
        <Styled.SpecialGroup>
          {supplier.remarks && (
            <>
              <Styled.AlertIcon>
                <WarningIcon />
              </Styled.AlertIcon>
              <Styled.SpecialText>
                Special remarks: {supplier.remarks}
              </Styled.SpecialText>
            </>
          )}
        </Styled.SpecialGroup>
        {item.quantities.map(({ type, name, description }, index) => (
          <Styled.AmountSection key={index}>
            {type}:<br />
            <AmountInput
              value={getQuantityFor(type)}
              onChange={setQuantityFor(type)}
            >
              <b>{name}</b> ({description})
            </AmountInput>
          </Styled.AmountSection>
        ))}
        <AddToOrderButton
          edit={isEditMode}
          disabled={isEditMode === false && totalAmount === 0}
          onClick={addToOrder}
        />
        {item.delivery && (
          <Styled.SupplierSection>
            delivery on: {item.delivery}
          </Styled.SupplierSection>
        )}
      </Styled.InfoSection>
    </Styled.Block>
  );
};

export default ProductDetails;
