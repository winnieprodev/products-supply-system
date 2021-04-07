import { Button, ProductCartItem } from "components";
import { ShoppingCartContext } from "components/ShoppingCart/utils";
import { useParamsOutsideSwitch } from "hooks";
import { Cart } from "models";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ROUTES from "routes";

import * as Styled from "./CartDropdown.styled";

interface OwnProps {
  cart: Cart;
}
const CartDropdown: React.FC<OwnProps> = ({ cart }) => {
  const { outletId = "", supplierId = "", supplierType = "local" } =
    useParamsOutsideSwitch(ROUTES.SUPPLIER_DETAILS) || {};
  const { removeProduct, cartId } = useContext(ShoppingCartContext);

  return (
    <Styled.Cart>
      <Styled.Products>
        {cart.map((product) => (
          <ProductCartItem
            key={product.productId}
            item={product}
            onRemove={() => removeProduct(product.productId)}
            outletId={outletId}
            supplierId={supplierId}
            supplierType={supplierType}
          />
        ))}
      </Styled.Products>
      <Link
        to={ROUTES.CHECKOUT.use({
          outletId,
          supplierType,
          supplierId,
          cartId: cartId.data?.toString() || "",
        })}
      >
        <Button primary fullWidth disabled={cart.length === 0}>
          Checkout
        </Button>
      </Link>
    </Styled.Cart>
  );
};

export default CartDropdown;
