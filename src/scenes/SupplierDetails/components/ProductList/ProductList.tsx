import { AnimatedGroup, AsyncWrapper, ShoppingCartContext } from "components";
import { Product, Supplier } from "models";
import React, { useCallback, useContext } from "react";
import { useHistory } from "react-router";
import ROUTES, { SupplierType } from "routes";

import { ProductDetails } from "./ProductDetails";
import * as Styled from "./productList.styled";
import { ProductTile } from "./ProductTile";

interface OwnProps {
  supplierId: string;
  outletId: string;
  supplier: Supplier;
  supplierType: SupplierType;
  selectedProductId: string | undefined;
  items: Product[];
}

const ProductList: React.FC<OwnProps> = ({
  selectedProductId,
  supplierId,
  supplierType,
  supplier,
  outletId,
  items,
}) => {
  const history = useHistory();

  const selectProduct = (productId: string) =>
    history.push(
      ROUTES.SUPPLIER_DETAILS.use({
        supplierId,
        supplierType,
        productId,
        outletId,
      }),
    );

  const clearSelection = useCallback(
    () =>
      history.push(
        ROUTES.SUPPLIER_DETAILS.use({ supplierId, supplierType, outletId }),
      ),
    [history, supplierId],
  );

  const { cart } = useContext(ShoppingCartContext);

  const getCartQuantity = (id: string) =>
    cart?.data?.find(({ productId }) => productId === id)?.quantities;

  return (
    <Styled.Wrapper>
      <AnimatedGroup>
        {items.map((item, index) => (
          <React.Fragment key={item.id}>
            <Styled.Product $index={index}>
              <ProductTile
                onClick={() => selectProduct(item.id)}
                item={item}
                isSelected={item.id === selectedProductId}
              />
            </Styled.Product>
            {item.id === selectedProductId && (
              <Styled.Details $index={index}>
                <AsyncWrapper item={cart}>
                  <ProductDetails
                    supplier={supplier}
                    item={item}
                    onClose={clearSelection}
                    cartQuantities={getCartQuantity(item.id)}
                  />
                </AsyncWrapper>
              </Styled.Details>
            )}
          </React.Fragment>
        ))}
      </AnimatedGroup>
    </Styled.Wrapper>
  );
};

export default ProductList;
